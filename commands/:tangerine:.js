const math = require("mathjs");

module.exports = {
	name: ':tangerine:',
	description: "porkar pic",
	execute(message, args) {
		var e = math.round(math.random(1, 6))
    switch(e){
      case 1:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747619936326910172/20190921_143646.jpg")
        break;
      case 2:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747620023790731376/20190907_195613.jpg")
        break;
      case 3:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747620024231133245/20190907_195553.jpg")
        break;
      case 4:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747620140392382655/20190921_143646.jpg")
        break;
      case 5:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747620311926571109/20190720_195646.jpg")
        break;
      case 6:
        message.channel.send("https://cdn.discordapp.com/attachments/506252991385305106/747620312425824266/20181211_171116.jpg")
    }
  },
};