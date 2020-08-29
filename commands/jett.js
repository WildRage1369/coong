const math = require("mathjs");
  
module.exports = {
	name: 'jett',
	description: "Lets find out who gets to play Jett today!",
	execute(message, args) {
    var answer = math.round(math.random(1,2))
		switch(answer){
      case 1:
        message.channel.send("Junoh!")
      case 2:
        message.channel.send("not junoh!")
    }
    message.channel.send("");
  },
};