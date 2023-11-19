const ms = require('ms');

module.exports = {
    name: 'unban',
    aliases: [],
    run: async (client, message, args, prefix, color) => {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            let userId = args[0];

            if (!userId) {
                return message.reply("❌ Veuillez spécifier l'ID de l'utilisateur à débannir.");
            }

            if (isNaN(userId) || !Number.isInteger(Number(userId))) {
                return message.reply("❌ L'ID doit être un nombre valide.");
            }

            try {

                await message.guild.members.unban(userId, `Unbanni par ${message.author.tag}`);
                message.reply(`✅ Utilisateur avec l'ID ${userId} a été débanni.`);
            } catch (error) {
               
                console.error(error);
                message.reply("❌ Une erreur s'est produite lors du débannissement de cet utilisateur.");
            }
        } else {
            message.reply("❌ Vous n'avez pas la permission de débannir des membres.");
        }
    }
};
