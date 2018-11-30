const helpfile = require("./configs/help.json");
const loudFoot = require("./configs/footer.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let check = message.channel.name;
    let correct = "webchain-botspam"

    if(check == correct || message.channel.type == "dm") {
    
        let helpEmbed = new Discord.RichEmbed()
        .setURL("http://webcn.loudmining.com")
        .setTitle("LOUDest pool on the BLOCK!")
        .setDescription("I am here to help! Please don't tease me or I will :sob:")
        .setColor("#00720D")
        .setThumbnail(URL = "https://webcn.loudmining.com/weblmpool-8f5b1b075d096442113fa67f9cfa34a2.png")
        .addField("Commands Available Are:", (helpfile.help))
        .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));

        return message.channel.send(helpEmbed);

    }

    message.channel.bulkDelete(1);
    bot.channels.get("515029051518353419").send(`${message.author} Please command me here!`);

    return;

}

module.exports.help = {

    name: "help"

}
