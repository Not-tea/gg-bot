/*
* CONSTANTS
*
* Keywords - words that gg-bot will respond to - and other generic constants go
* here. If you want to debug gg-bot, make sure you replace the developer
* name with your own Discord username.
*
* Edit this file to customize what gg-bot will respond to when chatting.
*
*/

module.exports = Object.freeze({
  botName: 'elena',
  commandFlag: '*',
  defaultRole: 'PSB',
  developer: 'greenglasses',
  colours: {
    DEFAULT: 0,
    AQUA: 1752220,
    GREEN: 3066993,
    BLUE: 3447003,
    PURPLE: 10181046,
    GOLD: 15844367,
    ORANGE: 15105570,
    RED: 15158332,
    GREY: 9807270,
    DARKER_GREY: 8359053,
    NAVY: 3426654,
    DARK_AQUA: 1146986,
    DARK_GREEN: 2067276,
    DARK_BLUE: 2123412,
    DARK_PURPLE: 7419530,
    DARK_GOLD: 12745742,
    DARK_ORANGE: 11027200,
    DARK_RED: 10038562,
    DARK_GREY: 9936031,
    LIGHT_GREY: 12370112,
    DARK_NAVY: 2899536
  },
  compliments: [
    'adorable',
    'alluring',
    'amazing',
    'ambitious',
    'attractive',
    'awesome',
    'beautiful',
    'brave',
    'breathtaking',
    'bright',
    'clever',
    'cool',
    'confident',
    'courteous',
    'cunning',
    'cute',
    'dedicated',
    'determined',
    'diligent',
    'enchanting',
    'enthralling',
    'fluffy',
    'great',
    'good',
    'handsome',
    'hotheaded',
    'intelligent',
    'like',
    'loyal',
    'love',
    'smart',
    'tsundere'
  ],
  channels: {
    lounge: 'chat',
    rules: 'rules-and-info',
    welcome: 'welcome'
  },
  emojis: {
    happy: 'happyrei',
    sad: 'amurodrama'
  },
  goodbyes: [
    'bye',
    'goodbye',
    'au revoir',
    'sayonara',
    'see you',
    'see ya',
    'later'
  ],
  hellos: [
    'bonjour',
    'hello',
    'hi ',
    ' hi',
    'hey',
    'morning',
    'evening',
    'afternoon'
  ],
  insults: [
    'brainless',
    'dislike',
    'dumb',
    'hate',
    'heartless',
    'horrible',
    'idiot',
    'mean',
    'rude',
    'terrible',
    'stupid',
    'suck'
  ],
  people: [
    'furuya',
    'rei',
    'amuro',
    'tooru',
    'bourbon',
    'zero'
  ],
  nights: [
    'sleep',
    'night',
    'good night',
    'bed'
  ],
  warningTiers: {
    first: 5,
    second: 10,
    third: 20
  }
});
