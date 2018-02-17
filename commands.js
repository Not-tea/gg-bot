/*
* COMMANDS
*
* Defines what commands gg-bot can run. Customize the command flag (by default *)
* in constants.js
*
* Current functionality:
*   Outputs help messages
*   Outputs large version of custom emoji
*   Outputs pretty role name and id
*   Google translates a phrase
*
* You can test out new commands by first putting them in debug, where only
* you (the developer defined in constants.js) can use them.
*
*/

const Constants = require('./constants.js');
const Translate = require('google-translate-api');
const Utils = require('./utils.js');

var options, message, client;

module.exports = {
  setup: function(clientToSet) {
    client = clientToSet;
  },
  run: function(msg) {
    console.log(`Running command ${msg.content}`);

    message = msg;
    options = message.content.substr(1).split(' ');

    switch(options.shift()) {
      case 'debug':
      case 'db':
        debug();
        break;
      case 'emoji':
      case 'ej':
        showEmoji();
        break;
      case 'help':
      case 'h':
        help();
        break;
      case 'role':
      case 'rl':
        showRole();
        break;
      case 'translate':
      case 'ts':
        googleTranslate();
        break;
      default:
        break;
    }
  }
}

function debug() {
  if (options.length < 2 || message.author.username != Constants.developer) return;

  switch(options.shift()) {
    // Test out new features here
    default:
      break;
  }
}

function help() {
  if (options.length == 0) {
    message.channel.send({embed: {
      "color": Constants.colours['DARK_GOLD'],
      "title": "GG Bot Commands",
      "description": `All commands must include a ${Constants.commandFlag} at the start of the message in order to work.`,
      "fields": [
        {
          "name": "help/h",
          "value": "Outputs this help message"
        },
        {
          "name": "emoji/ej :emojiname:",
          "value": `\`e.g. ${Constants.commandFlag}emoji ${Constants.emojis['happy']}\` Outputs a large version of an emoji.`
        },
        {
          "name": "role/rl <rolename>",
          "value": `\`e.g. ${Constants.commandFlag}role ${Constants.defaultRole}\`Outputs a prettified @rolename and the role's ID.`
        },
        {
          "name": "translate/ts <language> <what to translate>",
          "value": `\` e.g. ${Constants.commandFlag}ts english salut\` Google translates your sentence.`
        }
      ],
      "footer": {
        "text": `Ping ${Constants.developer} if there's any issues with me!`
      }
    }});
  } else if (options[0] == 'chat') {
    message.channel.send({embed: {
      color: Constants.colours['PURPLE'],
      title: 'Chat with me!',
      description: `You can chat with me by including ${Utils.capitalize(Constants.botName)} in your message` +
      " - if it interests me, I'll respond :heart: Things I tend to be " +
      "interested in include questions and greetings!"
    }});
  }
}

function showEmoji() {
  if (options.length == 0) {
    message.channel.send('You must include an emoji to show!');
    return;
  }
  // If the actual emoji was sent, extract the name
  if (options[0].startsWith('<')) options[0] = options[0].split(':', 2)[1]

  var emoji = Utils.emoji(options[0]);

  if (!emoji) {
    message.channel.send(`The emoji ${options[0]} was not found.`);
    return;
  }

  message.channel.send('`:' + emoji.name + ':`', {
    file: emoji.url
  });
}

function showRole() {
  if (options.length == 0) {
    message.channel.send('You must include a role to show!');
    return;
  }

  var name = options.join(' '),
      role = Utils.role(name, message.guild);

  if (!role) {
    message.channel.send(`The role ${name} was not found.`);
    return;
  }

  message.channel.send(
    `<@&${role.id}>\n` +
     "```<@&" + role.id + ">```"
  )
}

function googleTranslate() {
  if (options.length < 2) return;

  Translate(options.slice(1).join(' '), {to: options[0]}).then(res => {
    message.channel.send(res.text);

  }).catch(err => {
      console.error(err);
      message.channel.send("I'm sorry, I couldn't understand that.");
  });
}
