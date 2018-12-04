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
            let phr = body.hashrate;
            let minertotal = body.minersTotal;
            let totalblocks = (body.immatureTotal + body.maturedTotal);
            let lbf = new Date(body.stats.lastBlockFound * 1000);
    
            if (phr < 1e3) {
                phs = 'H/s';
            }	else if ((phr >= 1e3) && (phr < 1e6)) {
                phs = 'KH/s';
                phr = phr / 1e3;
            }	else if ((phr >= 1e6) && (phr < 1e9)) {
                phs = 'MH/s';
                phr = phr / 1e6;
            }
            
            phr = ((phr * 100) / 100).toFixed(3);
            
            let poolEmbed = new Discord.RichEmbed()
            .setTitle("LOUDest pool on the BLOCK!")
            .setDescription("I am here to help! Please don't tease me or I will :sob:")
            .setColor("#00720D")
            .setThumbnail(URL = "https://webcn.loudmining.com/weblmpool-8f5b1b075d096442113fa67f9cfa34a2.png")
            .addField("LOUD Mining's Webchain Pool", `Miners Hashing WEB: ${minertotal}\n\nOur Hashrate: ${phr} ${phs}\n\nWe have found ${totalblocks} blocks so far\n\nLast Block Found: ${lbf}`)
            .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));
    
            return message.channel.send(poolEmbed);
    
        });

        return;

    }

    message.channel.bulkDelete(1);
    bot.channels.get("515029051518353419").send(`${message.author} Please command me here!`);

    return;

}

module.exports.help = {

    name: "pool"

}
