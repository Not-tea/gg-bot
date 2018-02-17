/*
* CHAT-BOT
*
* This controls the chat functionality of gg-bot
*
* Responses should be customized in messages-js or constants.js as necessary
* This file contains only programming logic.
*
* Current functionality:
*   Echos what users tell it to say
*   Responds to questions with some predefined options
*   Responds to insults with an insult in return
*   Responds to compliments with a compliment in return
*   Responds to a request for a compliment about predefined list of people
*     with a compliment of that person
*   Responds to hellos, goodbyes, and good nights with an appropriate reply
*/

const Utils = require('./utils.js');
const Msgs = require('./messages.js');
const Constants = require('./constants.js');

var content;
var lcContent;
var message;
var questions = {};

module.exports = {
  run: function(msg) {
    message = msg;

    content = message.content;
    lcContent = content.toLowerCase();

    if (lcContent.includes('say')) { echo(); return; }
    if (lcContent.endsWith('?')) { answerQuestion(); return; }
    if (Utils.includesAny(lcContent, Constants.people)) { complimentPerson(); return; }
    if (Utils.includesAny(lcContent, Constants.insults)) { greet('insults'); return; }
    if (Utils.includesAny(lcContent, Constants.compliments)) { greet('compliments'); return; }

    var type = greetingType();
    if (type) { greet(type); return; }
  }
}

function answerQuestion() {
  if (lcContent in questions) {
    message.channel.send(questions[lcContent]);
    return;
  }

  var answer = Msgs.answers[Utils.randNum(Msgs.answers.length)];
  questions[lcContent] = answer;
  message.channel.send(answer);
}

function complimentPerson() {
  var regexStr = '(';
  var people = Constants.people;
  for (var i = 0; i < people.length; i++) {
    regexStr += people[i] + '|';
  }

  var regex = new RegExp(regexStr.slice(0, -1) + ')');
  var question = lcContent.split(regex);

  if (question.length >= 3 && question[2].includes('is')) {
    var name = question[1][0].toUpperCase() + question[1].substr(1).toLowerCase();
    message.channel.send(`${name} is ` +
      Constants.compliments[Utils.randNum(Constants.compliments.length)]);
  }
}

function echo() {
  var toSay = content.split(/(?:S|s)ay(.+)/);

  if (Utils.randNum(20) == 5) {
    message.channel.send(Msgs.tiredMsgs[Utils.randNum(Msgs.tiredMsgs.length)]);

  } else if (toSay.length < 3) {
    message.channel.send('Say what?');

  } else {
    var name = Constants.botName;
    var regex = new RegExp('/,* *(' + name[0] + '|' + name[0].toUpperCase() + name.substr(1) + ')$')
    toSay[1] = toSay[1].replace(regex, '').trim();

    if (toSay[1].length == 0) {
      message.channel.send('Say what?')
      return;
    }

    message.channel.send(toSay[1]);
  }
}

function greet(type) {
  message.channel.send(Msgs[type][Utils.randNum(Msgs[type].length)]);
}

function greetingType() {
  var greetType = false;

  ['hellos', 'goodbyes', 'nights'].forEach(function(type) {
    if (Utils.includesAny(lcContent, Constants[type])) {
      greetType = type;
    }
  });

  return greetType;
}
