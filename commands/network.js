const loudFoot = require("./configs/footer.json");
const api = "https://webcn.loudmining.com/api/stats";
const Discord = require("discord.js");
const fetch = require("node-superfetch");

module.exports.run = async (bot, message, args) => {

    let check = message.channel.name;
    let correct = "webchain-botspam"

    if(check == correct || message.channel.type == "dm") {
    
        fetch.get(api).then(r => {

            let body = r.body;
            let bch = body.nodes[0].height;
            let diff = body.nodes[0].difficulty;
            let nhr = body.nodes[0].difficulty / 12;
    
            if (diff < 1e3) {
                diffs = 'Hashes';
            }	else if ((diff >= 1e3) && (diff < 1e6)){
                diffs = 'Kilo Hashes';
                diff = diff / 1e3;
            }	else if ((diff >= 1e6) && (diff < 1e9)) {
                diffs = 'Mega Hashes';
                diff = diff / 1e6;
            }	else if ((diff >= 1e9) && (diff < 1e12)) {
                diffs = 'Giga Hashes';
                diff = diff / 1e9;
            }
    
            if (nhr < 1e3) {
                nhs = 'H/s';
            } 	else if ((nhr >= 1e3) && (nhr < 1e6)) {
                nhs = 'KH/s';
                nhr = nhr / 1e3;
            } 	else if ((nhr >= 1e6) && (nhr < 1e9)) {
                nhs = 'MH/s';
                nhr = nhr / 1e6;
            }
            
            diff = (diff).toFixed(3);
            nhr = (nhr).toFixed(3);
    
            let helpEmbed = new Discord.RichEmbed()
            .setTitle("LOUDest pool on the BLOCK!")
            .setDescription("I am here to help! Please don't tease me or I will :sob:")
            .setColor("#00720D")
            .setThumbnail(URL = "https://webcn.loudmining.com/weblmpool-8f5b1b075d096442113fa67f9cfa34a2.png")
            .addField("Webchain Network Status", `\nBlockchain Height: ${bch}\n\nNetwork Difficulty: ${diff} ${diffs}\n\nNetwork Hashrate: ${nhr} ${nhs}`)
            .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));
    
            return message.channel.send(helpEmbed);
    
        });

        return;
    
    }

    message.channel.bulkDelete(1);
    bot.channels.get("515029051518353419").send(`${message.author} Please command me here!`);

    return;
    
}

module.exports.help = {

    name: "network"
    
}
