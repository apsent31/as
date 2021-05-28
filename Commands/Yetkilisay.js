
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var rol = "838411198092935178"
  let kullanıcı = message.guild.members.cache.filter(s => s.roles.cache.has(rol)).filter(s => !s.voice.channel).size
  for(var i = 0;i < kullanıcı;i++){
    let a = message.guild.members.cache.filter(s => s.roles.cache.has(rol)).filter(s => !s.voice.channel).map(a => a)[i]
    const userDM = await a.createDM()
try {
    await userDM.send("Merhaba,rica etsem sesli kanallara giriş yaparmısın müsait değil isen alone odalarında AFK bırakabilirsin")
} catch {
    await message.channel.send(`<@${a.user.id}>Merhaba Rica etsem sol tarafta bulunan ses kanallarına giriş yaparmısın. Müsait değil isen alone odalarında AFK bırakabilirisin...`)
}
  }
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["yetkilidm", "staffdm"], 
  permLevel: 0 
};

exports.help = {
  name: "ysay", 
  description: "",
  usage: "" 
};