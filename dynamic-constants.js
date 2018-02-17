/*
* DYNAMIC CONSTANTS
*
* Defines responses that require dynamic content (ex. a new member's username)
*
*/
const Constants = require('./constants.js');
const Utils = require('./utils.js');

module.exports = {
  welcomeMsg: function(member) {
    var rules = Utils.channel(Constants.channels['rules']);
    var emoji = Utils.emoji(Constants.emojis['happy']);

    return `Welcome to the server, ${member}! ` +
          `Be sure to check out ${rules}.id for basic ` +
          "info on the server :heart: We're always pumped to talk to new people, " +
          "so don't feel afraid to jump in on any conversations!\n\n" +
          `I've given you the ${Constants.defaultRole} flair for now ` +
          `- if you would like that changed, just ping a mod. ${emoji}`
    },
    firstTierWarning: function(id) {
      var lounge = Utils.channel(Constants.channels['lounge']);

      return `Hey, <@${id}>! Welcoming new users is awesome and encouraged, ` +
            `but we try to keep full-on conversations in ${lounge}. ` +
            ':green_heart: You should head on down there!'
    },
    secondTierWarning: function(id) {
      return `Hello again, <@${id}> :wink: This channel is a great place to chat, you ` +
             "should move your discussion here since you're here already :heart:"
    },
    thirdTierWarning: function(id) {
      var emoji = Utils.emoji(Constants.emojis['sad']);
      return `You know what, <@${id}>? I don't care. I just don't care anymore. ` +
             'You never listen to me. Find then, do what you want. ' +
             `Chat here then ${emoji}`
    }
}
