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

var questions = {};

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

  if (Utils.includesAny(content.toLowerCase(), Constants.blacklist)) {
    message.delete(2);
    return;
  }

  if (content.startsWith('*')) {
    Commands.run(message);
  } else if (content.toLowerCase().includes(Constants.botName)) {
    ChatBot.run(message);
  }

  if (message.channel.name == Constants.channels['welcome'])
    MessageLimiter.run(message);
});

client.login(process.env.BOT_TOKEN);
