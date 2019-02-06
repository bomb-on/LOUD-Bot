const loudFoot = require("./configs/footer.json");
const Discord = require("discord.js");
const vrsc = "vrsc";
const web = "web";
module.exports.run = async (bot, message, args) => {
    let check = message.channel.id;
    let correct = "537913904005775361";
    if(message.channel.type == "dm") return message.channel.send("Sorry can't do that here!");
    if(check == correct) {
        var title;
        var cpuMiners;
        var gpuMiners;
        var wallet;
        if(!args[0]) return message.reply("Aww man...something went wrong...\n\nTry **vrsc** or **web** after your command.");
        if(args[0] != vrsc || args[0] != web) return message.reply("Ok quit messing around! :joy:");
        if(args[0] = vrsc) {
            title = "VerusCoin";
            cpuMiners = `**CPU ONLY**\n\n**CCminer**\nhttps://github.com/monkins1010/ccminer/releases/tag/v3.3CPU \n\n**nheqminer**\nhttps://github.com/VerusCoin/nheqminer/releases`;
            gpuMiners = `**NVIDIA**\n\n**CCminer**\nhttps://github.com/monkins1010/ccminer/releases \n\n**AMD**\n\n***Coming Soon! Please stay tuned!***`;
            wallet = `**GUI-Wallet**\n\n**Agama**\nhttps://github.com/VerusCoin/Agama/releases \n\n**CLI-Wallet**\n\n**VerusCoin**\nhttps://github.com/VerusCoin/VerusCoin/releases`;
        } else if (args[0] = web) {
            title = "Webchain";
            cpuMiners = `**CPU ONLY**\n\n**0% Dev Fee Courtesty of LOUD Mining**\n***Pre-Compiled*** - https://webcn.loudmining.com/#/downloads \n\n***Source Code*** - https://github.com/LOUD-Mining/webchain-miner \n\n**Webchain-miner**\n**Developers Github** - https://github.com/webchain-network/webchain-miner`;
            gpuMiners = `**Nvidia**\n\n**xm-rig**\n***Pre-Compiled***\nhttps://webcn.loudmining.com/#/downloads \n**Source Code**\nhttps://github.com/monkins1010/Webchain-nvidia-opensource \n\n**AMD**\n\n**xm-rig**\nhttps://github.com/monkins1010/AMDWEBCHAIN-AMD/releases \n**xmr-stak**\nhttps://github.com/monkins1010/LOUD-Webchain-xmr-stak-AMD/releases`;
            wallet = `**GUI-Wallet**\n\n**webchain-wallet**\nhttps://github.com/webchain-network/webchain-wallet/releases \n\n**CLI-Wallet**\n\n**webchaind**\nhttps://github.com/webchain-network/webchaind/releases`;
        }
        let softwareEmbed = new Discord.RichEmbed()
        .setTitle(`${title}`)
        .setColor("#00720D")
        .setThumbnail(URL = "https://loudmining.com/images/loudog.png")
        .addField("Mining Software", (cpuMiners, gpuMiners))
        .addField("Wallet Software", (wallet))
        .addField("Powered by © LOUD Mining 2018", (loudFoot.footer));
        return message.channel.send(softwareEmbed);
    }
    message.channel.bulkDelete(1);
    bot.channels.get("515029051518353419").send(`${message.author} Please command me here!`);
    return;
}
module.exports.help = {
    name: "software"
}
