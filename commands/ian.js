const math = require("mathjs");

module.exports = {
	name: 'ian',
	description: "Thank you, Ian!",
	execute(message, args) {
		if (math.round(math.random(1, 10)) == 10)
      message.channel.send("Thank you, Ian!");
  },
};