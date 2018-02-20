# GG Bot

GG-Bot is a simple Discord bot that can run commands and chat with people on Discord.

## Setup

### Setting up your environment

1. Follow the steps [here](https://help.github.com/articles/set-up-git/) to set up Git on your computer if necessary
2. Click on the `Fork` button in the upper right corner of this page to fork your own version of gg-bot
3. In your terminal of choice, clone your forked repository by running `git clone <url_to_forked_repository>`
4. Follow the steps [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) to set up node.js if necessary

### Setting up your bot to run locally
Note: This will allow your bot to run on your computer *only when* you have your computer
open and running with an Internet connection. To have your bot running 24/7 without
straining your computer, refer to `Setting up your bot to run remotely`

1. Create a [Discord Application](https://discordapp.com/developers/applications/me)
   - Click on `New Application`
   - Put the name you want for your bot as the application name
   - Add a description and icon if you wish - the icon will be displayed as the bot's profile pic
   - Click `Create App`
2. Create a `Bot User` on your new application's page
3. Copy your application's `Client/Application ID` at the top of the page, then go to `https://discordapp.com/oauth2/authorize?client_id=INSERT_ID_HERE&scope=bot`, replacing `INSERT_ID_HERE` with your real ID
4. Authorize your bot for the server you want to add it to
5. Return to your application page and in the Bot section, click `click to reveal` to reveal your bot's token and copy it
6. Return to your terminal of choice in the gg-bot directory:
   - If you're on Windows, run `set BOT_TOKEN=INSERT_ID_HERE`, replacing INSERT_ID_HERE with your actual bot token
   - If you're on Mac, run `export BOT_TOKEN=INSERT_ID_HERE`, replacing INSERT_ID_HERE with your actual bot token
   - If you're on Linux, I assume you know how to set an environment variable
7. Run `node index.js` - your bot should begin running

### Setting up your bot to run remotely

1. Create a [Heroku account](https://www.heroku.com/) - select the Free plan unless
you expect your bot to be getting a *lot* of traffic
2. Download the [Heroku CLI tools](https://devcenter.heroku.com/articles/heroku-cli)
3. In your terminal of choice, navigate to the `gg-bot` folder and run `heroku login`
Enter your login credentials for Heroku
4. Run (replacing INSERT_ID_HERE with your actual bot token):
```
heroku create
heroku config:set BOT_TOKEN=INSERT_ID_HERE
heroku ps:scale web=0
heroku ps:scale bot=1
git push heroku master
```
5. Check the status of your bot by running `heroku ps` - if it's running successfully,
you should see that `bot` is marked as `up`. If it's crashed, you may want to debug
by running `heroku logs --tail`, which will allow you to see error messages and
other relevant info

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

gg-bot will echo what a user tells it to say. There's a 5% chance that it will output
a message saying that they don't want to repeat what they were told to say.

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
