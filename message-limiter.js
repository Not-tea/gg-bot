/*
* MESSAGE LIMITER
*
* Outputs warning messages to users if they talk too much in the welcoming
* channel.
*
* Customize the response messages in dynamic-constants.js and how many messages
* users must send in order to be warned in constants.js
*
*/

const Constants = require('./constants.js');
const DynamicConstants = require('./dynamic-constants.js');
const Utils = require('./utils.js');

var messageCounts;
var newUserName;

module.exports = {
  setup: function() {
    messageCounts = {};
    newUserName = '';
  },
  reset: function(name) {
    messageCounts = {};
    newUserName = name;
  },
  run: function(message) {
    var name = message.author.username;
    if (newUserName == name) return;

    if (name in messageCounts) {
      messageCounts[name]++;
      warnUser(name, message.author.id);
      return;
    }

    messageCounts[name] = 1;
  }
}

function warnUser(name, id) {
  console.log(`${name} has sent ${messageCounts[name]} messages in #${Constants.channels['welcome']}`);

  switch(messageCounts[name]) {
    case Constants.warningTiers['first']:
      Utils.channel(Constants.channels['welcome'])
           .send(DynamicConstants.firstTierWarning(id));
      break;
    case Constants.warningTiers['second']:
      Utils.channel(Constants.channels['lounge'])
           .send(DynamicConstants.secondTierWarning(id));
      break;
    case Constants.warningTiers['third']:
      Utils.channel(Constants.channels['welcome'])
           .send(DynamicConstants.thirdTierWarning(id));
      messageCounts[name] = 0;
      break;
    default:
      break;
  }
}
