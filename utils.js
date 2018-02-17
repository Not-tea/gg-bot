/*
* UTILS
*
* Various useful functions.
*
*/

var client;

module.exports = {
  setup: function(clientToSet) {
    client = clientToSet;
  },
  capitalize: function(str) {
    return str[0].toUpperCase() + str.slice(1);
  },
  channel: function(name) {
    chl = client.channels.find('name', name);
    if (!chl) console.error(`The channel ${name} was not found`);
    return chl;
  },
  emoji: function(name) {
    emji = client.emojis.find('name', name);
    if (!emji) console.error(`The emoji ${name} was not found`);
    return emji;
  },
  includesAny: function(str, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) return true;
    }

    return false;
  },
  randNum: function(size) {
    return Math.floor(Math.random() * size);
  },
  role: function(name, guild) {
    rl = guild.roles.find('name', name);
    if (!rl) rl = guild.roles.find('name', name.toLowerCase());
    if (!rl) rl = guild.roles.find('name', name.toUpperCase());
    if (!rl) console.error(`The role ${name} was not found`);
    return rl;
  },
  user: function(name) {
    usr = client.users.find('username', name);
    if (!usr) console.error(`The user ${name} was not found`);
    return usr;
  }
}
