const math = require("mathjs");

module.exports = {
	name: 'mayamention',
	description: "shut up maya",
	execute(message, args) {
		if (math.round(math.random(1, 10)) == 10)
      message.channel.send("<@!470035801732808714>");
  },
};