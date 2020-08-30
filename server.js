const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
const http = require("http");
const express = require("express");
const app = express();
const math = require("mathjs");
const roundTo = require("round-to");
const opus = require("node-opus");
const sodium = require("sodium");
const box = new sodium.Box();
const request = require("request");
var Spotify = require("spotify-web-api-js");
var s = new Spotify();
var prefix = "|";



for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

var guilds = ["477574319556395020", "45697752326012928", "517159486763433984"]; //blacklist guilds
let list = [
  {
    song:
      "https://cdn.glitch.com/2d1f5350-3d90-49e2-be51-e43b6064ae27%2FRoblox%20Death%20Sound%20-%20OOF%20Sound%20Effect.mp3?1549584089116"
  }, //oof
  {
    song:
      "https://cdn.glitch.com/2d1f5350-3d90-49e2-be51-e43b6064ae27%2FNational%20Anthem%20of%20USSR.mp3?1542153540409"
  }, //ussr
  {
    song:
      "https://cdn.glitch.com/2d1f5350-3d90-49e2-be51-e43b6064ae27%2Fvideoplayback.mp4?1549508974259"
  }, //dayman
  {
    song:
      "https://cdn.glitch.com/2d1f5350-3d90-49e2-be51-e43b6064ae27%2FThe%20Clash%20-%20Rock%20The%20Casbah.mp3?1549510295677"
  } //rock the casbah
]; //List

function ifThen(thing1, thing2) {
  client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.includes(thing1)) message.channel.send(thing2);
  });
} //ifthen func

client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (message.content.toLowerCase().includes("stuff"))
    client.commands.get("stuff").execute(message, args);
  if (message.content.toLowerCase().includes("coong"))
    client.commands.get("coong").execute(message, args);
  if (message.author.id === "470035801732808714")
    client.commands.get("mayamention").execute(message, args);
  if (message.content.startsWith("🔫"))
    client.commands.get(":gun:").execute(message, args);
  if (message.content.startsWith("<:wuf:715020630583541810>"))
    client.commands.get(":dog:").execute(message, args);
  if (message.author.id === "439891553151090688")
    client.commands.get("arnie").execute(message, args);
  if (message.content.startsWith("🍊"))
    client.commands.get(":tangerine:").execute(message, args);
  if (message.content.startsWith("pls snipe"))
    client.commands.get("pls snipe").execute(message, args);
  if (message.content.startsWith("tragedy"))
    client.commands.get("tragedy").execute(message, args);
  if (message.content.toLowerCase().includes("anuj"))
    client.commands.get("anuj").execute(message, args);
  if (message.content.toLowerCase().includes("ice clan"))
    client.commands.get("iceclan").execute(message, args);
  if (message.content.toLowerCase().includes("?jett"))
    client.commands.get("jett").execute(message, args);
  if (message.content.toLowerCase().includes("omg"))
    client.commands.get("harupenis").execute(message, args);
  if (message.content.toLowerCase().includes("wait"))
    client.commands.get("harupenis").execute(message, args);
  if (message.content.toLowerCase().includes("navy"))
    client.commands.get("navyseal").execute(message, args);
  if (message.content.toLowerCase().includes("<@&717178582333390849>"))
    client.commands.get("areyawinning").execute(message, args);
  if (message.content.toLowerCase().includes("?status")){
    client.user.setActivity(args)
    message.channel.send("'"+args+"'" + " is now my status")}
  if (message.content.toLowerCase().includes("maya"))
    client.commands.get("mayadick").execute(message, args);
  if (message.content.toLowerCase().includes("sex"))
    client.commands.get("sex").execute(message, args);
  if (message.content.toLowerCase().includes("penis"))
    client.commands.get("harupenis2").execute(message, args);
  if (message.content.toLowerCase() == ("k"))
    client.commands.get("k").execute(message, args);
  

});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const msg = args.join(" ");
  const member = message.member.id;

  if (command == "leave") message.member.voiceChannel.leave();
  if (command == "oof times") message.channel.send(list[0].list);
  if (command == "ussr times") message.channel.send(list[1].list);
  if (command == "binary") {
    var x = message.content.substring(7);
    var y = parseInt(x);
    if (x != "") {
      message.channel.send(y.toString(2));
    } else {
      message.channel.send("Please enter a number after binary");
    }
  }

  if (command === "help")
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [
          {
            name: "Prefix",
            value:
              "The default prefix is currently '?' but will eventuraly be able to be individualy changed per server"
          },
          {
            name: "Prefix + binary + #",
            value:
              "This command turns the number send after the command into binary"
          },
          {
            name: "Oof",
            value:
              "This command plays oof once when you are in a voice channel (**LOUD**)"
          },
          {
            name: "USSR National Anthem",
            value:
              "This command plays the USSR National Anthem when you are in a voice channel (**LOUD**)"
          },
          {
            name: "Dayman",
            value:
              "This command plays [this](https://www.youtube.com/watch?v=zaMDWu_OzW4) video by [Quad Lazer](https://www.youtube.com/channel/UCLc8XQhPmix6mvXmiaP-P_Q) when you are in a voice channel (**LOUD**)"
          },
          {
            name: "Casbah",
            value:
              "This command plays the song [Rock the Cabah](https://www.youtube.com/watch?v=bJ9r8LMU9bQ) by [The Clash](https://www.youtube.com/user/theclash)"
          },
          {
            name: "Prefix + Coin",
            value: "This command flips a coin that lands on heads or tails"
          },
          {
            name: "Prefix + Ping",
            value: "This command displays your ping in relation to the Bot"
          },
          {
            name: "NRG",
            value:
              "This command sends 5 messages that say 'solar panels on my tesla'"
          },
          {
            name: "no u",
            value:
              "This Bot responds to anyone that says no u by saying 'get a better insult' (note, the bot also responds to other variations of the epic roast like 'no you' or 'know u') "
          },
          {
            name: "n word",
            value: "This command sends a message that says 'Hey that's mean'"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text:
            "This bot was created by me, 'WildRage#4697' and is hosted on glitch.com, a free hosting website. Because of this this bot can go offline occationaly and may not work but new features are added every once in a while. If you have an idea for a new command DM me"
        }
      }
    }); //help embed
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const msg = args.join(" ");
  const member = message.member.id;

  if (command == "oof") {
    if (guilds.includes(message.guild.id)) return;
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
      list[0].list++;
      await playSong(connection, list[0].song); // play song
      message.member.voiceChannel.leave();
    }
  }

  if (command == "ussr national anthem") {
    if (guilds.includes(message.guild.id)) return;
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
      list[2].list++;
      await playSong(connection, list[1].song); // play song
      message.member.voiceChannel.leave();
    }
  }

  if (command == "dayman") {
    if (guilds.includes(message.guild.id)) return;
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
      await playSong(connection, list[2].song);
    }
  } // dayman

  if (command == ("casbah" || "sharif")) {
    if (guilds.includes(message.guild.id)) return;
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
      list[3].list++;
      await playSong(connection, list[3].song); // play song
      message.member.voiceChannel.leave;
    }
  }
}); //song

function playSong(connection, song) {
  return new Promise((resolve, reject) => {
    const dispatcher = connection.playArbitraryInput(song);
    dispatcher.on("end", () => {
      resolve();
    });
  });
} //song function

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
}); //forever run code
app.listen(process.env.PORT); //forever run code
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); //forever run code

// client.login(process.env.secret)