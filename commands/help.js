const helpfile = require("./configs/help.json");
const loudFoot = require("./configs/footer.json");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let check = message.channel.id;
    let correct = "537913904005775361"
    if(check == correct || message.channel.type == "dm") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Available Commands")
        .setColor("#00720D")
        .setThumbnail(URL = "https://loudmining.com/images/loudog.png")
        .addField(".help", "This help message")
        .addField(".pools", "LOUD Mining's Pool Stats")
        .addField(".network", "Network stats of Pool coins")
        .addField(".promo", "Current Promotions")
        .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));
        return message.channel.send(helpEmbed);
    }
    message.channel.bulkDelete(1);
    bot.channels.get("537913904005775361").send(`${message.author} Please command me here or in a DM thanks!`);
    return;
}
module.exports.help = {
    name: "help"
}