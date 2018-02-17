# GG Bot

GG-Bot is a simple Discord bot that can run commands and chat with people on Discord.

## Setup

### Setting up your environment

1. Follow the steps [here](https://help.github.com/articles/set-up-git/) to set up Git on your computer if necessary
2. Click on the `Fork` button in the upper right corner of this page to fork your own version of gg-bot
3. In your terminal of choice, clone your forked repository by running `git clone <url_to_forked_repository>`
4. Follow the steps [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) to set up node.js if necessary

### Setting up your bot

1. Create a [Discord Application](https://discordapp.com/developers/applications/me)
   - Click on `New Application`
   - Put the name you want for your bot as the application name
   - Add a description and icon if you wish - the icon will be displayed as the bot's profile pic
   - Click `Create App`
2. Create a `Bot User` on your new application's page
3. Copy your application's `Client/Application ID` at the top of the page, then go to `https://discordapp.com/oauth2/authorize?client_id=INSERT_ID_HERE&scope=bot`, replacing `INSERT_ID_HERE` with your real ID
4. Authorize your bot for the server you want to add it to
5. Return to your application page and in the Bot section, click `click to reveal` to reveal your bot's token and copy it
6. Go to [index.js](index.js) and replace `[INSERT TOKEN HERE]` at the bottom of the file with your real bot's token
7. Run `node index.js` - your bot should begin running

### Customizing your bot

- You can easily customize gg-bot's responses by editing phrases in [constants](constants.js), [dynamic constants](dynamic-constants.js), and [messages](messages.js).

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
