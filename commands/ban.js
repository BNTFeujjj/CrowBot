const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!member) member = await message.guild.members.fetch(args[0]).catch(() => { return message.reply(`❌ Aucune personne trouvée !`); });

            if (member) {
                if (member && member.user && member.user.id === message.author.id) {
                    return message.reply("❌ Vous ne pouvez pas vous bannir vous-même !");
                }
                

                let raison = args.slice(1).join(' ') || "Aucune raison";
                if (!raison) raison = "Aucune raison donnée";

                // Use guild.members.ban() instead of member.ban()
                await message.guild.members.ban(member, { reason: `Banni par ${message.author.username} pour la raison : ${raison}` }).then(() => {
                    message.reply(`✅ ${member.user.username}#${member.user.tag} a été banni par ${message.author.tag} pour la raison : ${raison}`);
                }).catch(error => {
                    message.reply('❌ Une erreur s\'est produite lors du bannissement de ce membre.');
                    console.error(error);
                });
            }
        }
    }
};
