const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, message) => {
    const guild = message.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`link_${message.guild.id}`) === true){
if (message.content.match(/(discord\.gg\/([a-zA-Z0-9]+)|discordapp\.com\/invite\/([a-zA-Z0-9]+))|(https:\/\/([a-zA-Z0-9]+)|http:\/\/([a-zA-Z0-9]+))/)){
    if (message.member.permissions.has("ADMINISTRATOR")) return;
    if (message.author.id === client.user.id) return;
let protected = new MessageEmbed()
.setTitle("**LOGS**")
.setDescription(`L'anti-invite vien d'être utilisé. Une personne a envoyé une invitation ou un lien non autorisée.\n
La personne est <@${message.author.id}>`)
.setColor("RED")
message.delete().catch(() => false)

if (logs) logs.send({embeds: [protected]}).catch(() => false)
}
}
}
