/*
* INDEX
*
* This is the main file - gg-bot is started by running `node index.js`
*
* It mainly takes care of initialization and forwarding the appropriate
* information to functions in other files.
*
*/

const ChatBot = require('./chat-bot.js');
const Commands = require('./commands.js');
const Constants = require('./constants.js');
const DynamicConstants = require('./dynamic-constants.js');
const Discord = require('discord.js');
const MessageLimiter = require('./message-limiter.js');
const Utils = require('./utils.js');

const client = new Discord.Client();

var deletedMessages = [];

client.on('ready', () => {
  console.log('Ready to roll as ' + client.user.username);

  MessageLimiter.setup();
  Utils.setup(client);
  Commands.setup(client);
});

client.on('guildMemberAdd', member => {
  console.log(`${member.user.username} has joined the server!`);

  MessageLimiter.reset(member.user.username);
  Utils.channel(Constants.channels['welcome'])
       .send(DynamicConstants.welcomeMsg(member));
});

client.on('message', message => {
  var name = message.author.username;
  if (name == client.user.username) return; // Prevent infinite response loop

  var content = message.content;
  var lcContent = content.toLowerCase();

  if (Constants.moderate) {
    if (Utils.includesAny(lcContent, Constants.blacklist)) {
      deletedMessages.push({ sender: message.author.username, message: content });
      message.delete(2);
      return;
    }

    if (/^\*restore( all)?$/.test(lcContent)) {
      if (Utils.role(Constants.adminRole, message.guild).members.has(message.author.id)) {
        lcContent == '*restore all' ? restoreAll(message) : restoreOne(message);
        return;
      }
    }
  }

  if (content.startsWith(Constants.commandFlag)) {
    Commands.run(message);
  } else if (Utils.wordRegex(Constants.botName).test(lcContent)) {
    ChatBot.run(message);
  }

  if (message.channel.name == Constants.channels['welcome'])
    MessageLimiter.run(message);
});

function restoreAll(message) {
  var length = deletedMessages.length;

  if (length == 0) {
    message.channel.send('There is nothing to restore')
    return;
  }

  for (var i = 0; i < length; i++) {
    restoreOne(message);
  }
}

function restoreOne(message) {
  if (deletedMessages.length > 0) {
    var lastMsg = deletedMessages.pop();
    message.channel.send(`**${lastMsg['sender']} sent:** \`\`\`${lastMsg['message']}\`\`\``);
  } else {
    message.channel.send('There is nothing to restore');
  }
}

client.login(process.env.BOT_TOKEN);
