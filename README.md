# GG Bot

GG-Bot is a simple Discord bot that can run commands and chat with people on Discord.

## Usage

### Commands
By default, gg-bot responds to the command flag \*, and that is what is documented here. However, this can be customized this in the
[constants](constants.js) file.

`*help`

Outputs a help message for commands.

`*help chat`

Outputs a help message for chatting.

`*emoji <emojiname>` or `*emoji :emoji:`

Outputs a large version of a custom emoji.

`*role <rolename>`

Outputs a role 'mention' and the role's ID that can be used to 'mention' the role in messages.

`*translate <language> <what to translate>`

Google translates a phrase.

### Chat

By default, gg-bot will chat with a user if their message contains the name 'Elena', and that is what is documented here. However, again, this can be customized in the [constants](constants.js) file.

Additionally, note that the bot's name may be anywhere in a message and it will still trigger.

`Elena, say <something>`

gg-bot will echo what a user tells it to say.

`Elena, <question>?`

gg-bot will randomly output an answer from a set of answers defined in the [messages](messages.js) file.

`Elena, <person> is?`

If <person> is defined in [constants](constants.js), gg-bot will compliment that person.

`Elena, <compliment>`

gg-bot will output a compliment from [messages](messages.js).

`Elena, <insult>`

gg-bot will output an insult from [messages](messages.js).

`Elena, <greeting>`

gg-bot will output a hello, goodbye, or good night from [messages](messages.js) depending on the greeting.  
