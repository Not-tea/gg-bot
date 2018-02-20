/*
* MESSAGES
*
* Defines responses gg-bot will send based on the programming logic in
* chat-bot.js.
*
* Edit this file to customize what gg-bot will say when chatting.
*
*/

module.exports = Object.freeze({
  answers: [
    'Definitely',
    'Maybe',
    'Never',
    'No',
    'No doubt about it',
    'Not in a million years',
    'Perhaps',
    "There's a fifty-fifty chance",
    'Yes'
  ],
  compliments: [
    "Aw, you're the best",
    "I'm happy that you think that of me",
    "That's just the pick me up I needed, thank you!",
    "Maybe I won't grab a coffee break after all",
    "Thanks so much :heart:",
    "Butter me up all you want, I see right through you"
  ],
  goodbyes: [
    'Au revoir!',
    'See ya',
    'Goodbye',
    'Farewell, my friend',
    'Sayonara and goodbye'
  ],
  hellos: [
    'Hello, friend',
    'Hello to you too!',
    'Hello bonjour!',
    'Heya, mate!',
    'Hi!',
    'Yo :)',
    'Hey hey hey~',
    'Sometimes I get tired of greeting people, leave me alone.'
  ],
  insults: [
    "Like you're one to talk",
    "Ha, says *you*",
    "I'm sorry, did you say something? I don't listen to people who lower my intelligence",
    "Do you feel better now? Insulting me? You should be ashamed"
  ],
  nights: [
    'Good night!',
    'Have a good sleep :heart:',
    "Don't let the bedbugs bite",
    'Yes, go to sleep, sleep is good',
    "No, don't sleep, stay with me :("
  ],
  // 5% chance of being outputted when someone asks gg-bot to say something
  tiredMsgs: [
    "Leave me alone, I have my own life too",
    "I don't want to, hmph",
    "Be right back, I'm grabbing a coffee",
    "Don't feel like it. Why? I don't know, blame my creator",
    "Ugh. Ergh. Yeah, not gonna do it",
    "Sorry, I have a hangover, not feeling up to it right now"
  ]
});
