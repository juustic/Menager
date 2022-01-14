const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");


client.on('ready', () => {
    console.log('Connecting...');
});

client.on('message', message => {
const prefix2 = '!';
const l2 = ';';
const date = '1-1-2029';
const item = 'item';
const wings = 'wings';
const hat = 'hat';
const acape = 'acape';

        const args = message.content.trim().split(/ +/g);
	const cmd = args[0].slice(prefix2.length).toLowerCase();
        	let nick = args[1];
		let id = args[2];

const nadano1 = {
	color: 0x0099ff,
	title: `:white_check_mark: Nadano!`,
	url: '',
	author: {
		name: '',
		icon_url: '',
		url: '',
	},
	description: `Pomy�lnie PRZYZNANO **item** GRACZU **${nick}** O ID **${id}** Na CZAS **${date}**`,
	thumbnail: {
		url: `https://minotar.net/avatar/${nick}`,
	},
	image: {
		url: '',
	},
	timestamp: new Date(),
	footer: {
		text: ``,
		icon_url: '',
	},
};
const nadano2 = {
	color: 0x0099ff,
	title: `:white_check_mark: Nadano!`,
	url: '',
	author: {
		name: '',
		icon_url: '',
		url: '',
	},
	description: `Pomy�lnie PRZYZNANO **wings** GRACZU **${nick}** O ID **${id}** Na CZAS **${date}**`,
	thumbnail: {
		url: `https://minotar.net/avatar/${nick}`,
	},
	image: {
		url: '',
	},
	timestamp: new Date(),
	footer: {
		text: ``,
		icon_url: '',
	},
};
const nadano3 = {
	color: 0x0099ff,
	title: `:white_check_mark: Nadano!`,
	url: '',
	author: {
		name: '',
		icon_url: '',
		url: '',
	},
	description: `Pomy�lnie PRZYZNANO **hat** GRACZU **${nick}** O ID **${id}** Na CZAS **${date}**`,
	thumbnail: {
		url: `https://minotar.net/avatar/${nick}`,
	},
	image: {
		url: '',
	},
	timestamp: new Date(),
	footer: {
		text: ``,
		icon_url: '',
	},
};
const nadano4 = {
	color: 0x0099ff,
	title: `:white_check_mark: Nadano!`,
	url: '',
	author: {
		name: '',
		icon_url: '',
		url: '',
	},
	description: `Pomy�lnie PRZYZNANO **acape** GRACZU **${nick}** O ID **${id}** Na CZAS **${date}**`,
	thumbnail: {
		url: `https://minotar.net/avatar/${nick}`,
	},
	image: {
		url: '',
	},
	timestamp: new Date(),
	footer: {
		text: ``,
		icon_url: '',
	},
};

      if (cmd === 'item') {
          message.delete({ timeout: 6000 })
            if (message.channel.id == "928701332905406535") {
              if (!args[2]) return message.reply("B��d, Podaj sw�j nick")
              .then(message => {
                  message.delete({ timeout: 6000 })
              })
              message.reply({ embed: nadano1 })
              .then(message => {
                  message.delete({ timeout: 6000 })
              })
			  fs.appendFile('html/api/users.file', item+l2+args[1]+l2+args[2]+l2+date + '\r\n', (err) => {
				if (err) {
				  console.log(err);
				}
				else {
				  console.log("Pomy�lnie Nadano item!: \n",
					fs.readFileSync("html/api/users.file", "utf8"));
				}
			  });
			}
		}
	if (cmd === 'wings') {
		message.delete({ timeout: 6000 })
		  if (message.channel.id == "928701332905406535") {
			if (!args[2]) return message.reply("B��d, Podaj sw�j nick")
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			message.reply({ embed: nadano2 })
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			fs.appendFile('html/api/users.file', wings+l2+args[1]+l2+args[2]+l2+date + '\r\n', (err) => {
			  if (err) {
				console.log(err);
			  }
			  else {
				console.log("Pomy�lnie Nadano skrzyd�a!: \n",
				  fs.readFileSync("html/api/users.file", "utf8"));
			  }
			});
		  }
	  }
	  if (cmd === 'hat') {
		message.delete({ timeout: 6000 })
		  if (message.channel.id == "928701332905406535") {
			if (!args[2]) return message.reply("B��d, Podaj sw�j nick")
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			message.reply({ embed: nadano3 })
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			fs.appendFile('html/api/users.file', hat+l2+args[1]+l2+args[2]+l2+date + '\r\n', (err) => {
			  if (err) {
				console.log(err);
			  }
			  else {
				console.log("Pomyslnie Nadano czapke!: \n",
				  fs.readFileSync("html/api/users.file", "utf8"));
			  }
			});
		  }
	  }
	  if (cmd === 'acape') {
		message.delete({ timeout: 6000 })
		  if (message.channel.id == "928701332905406535") {
			if (!args[2]) return message.reply("B��d, Podaj sw�j nick")
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			message.reply({ embed: nadano4 })
			.then(message => {
				message.delete({ timeout: 6000 })
			})
			fs.appendFile('html/api/users.file', acape+l2+args[1]+l2+args[2]+l2+date + '\r\n', (err) => {
			  if (err) {
				console.log(err);
			  }
			  else {
				console.log("Pomyslnie Nadano Animowana Peleryne!: \n",
				  fs.readFileSync("html/api/users.file", "utf8"));
			  }
			});
		  }
	  }
  })
client.login('OTMxMjY0ODQ0NTk2OTA4MTQy.YeB5-Q.7QQGJiy2LuLcqa8j__l7AvDa9qs');