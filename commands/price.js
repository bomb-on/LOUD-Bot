const loudFoot = require("./configs/footer.json");
const api = "https://app.stex.com/api2/ticker";
const Discord = require("discord.js");
const fetch = require("node-superfetch");

module.exports.run = async (bot, message, args) => {

    let check = message.channel.name;
    let correct = "webchain-botspam"

    if(check == correct || message.channel.type == "dm") {
    
        fetch.get(api).then(r => {
            let body = r.body;
            let pair = ("WEB_BTC");
            // let btc = ("BTC_USD");
            
            let tradepair = body.find(post => post.market_name === pair);
            // let btcpair = body.find(post => post.market_name === btc);
            // let webusd = (btcpair.last * tradepair.last);
            
            let priceEmbed = new Discord.RichEmbed()
            .setTitle("LOUDest pool on the BLOCK!")
            .setDescription("I am here to help! Please don't tease me or I will :sob:")
            .setColor("#00720D")
            .setThumbnail(URL = "https://webcn.loudmining.com/weblmpool-8f5b1b075d096442113fa67f9cfa34a2.png")
            .addField("Webchain Price", `${tradepair.last}`)
            .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));
    
            return message.channel.send(priceEmbed);

        });

        return;
    
    }

    
    message.channel.bulkDelete(1);
    bot.channels.get("515029051518353419").send(`${message.author} Please command me here!`);

    return;

}

module.exports.help = {

    name: "price"
    
}
