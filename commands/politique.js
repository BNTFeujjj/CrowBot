
let replies = ["Mélenchon !", "Poutine !", "Macron", "Valérie Pécresse !", "Biden !", "Zemmour !", "Fabien Roussel !", "Titicraft!", "BNT Feujjj !", "Trump !"];

const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'politique',
    aliases: [],
    run: async (client, message, prefix) => {
        let member = message.mentions.members.first() || message.member;

        let politicians = [
            { name: "Jean-Luc Mélenchon !", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnfu1sLqd5hAiMvWwmae3KwIq5aVnNILf7n-Da6KfKbgsqMxGo" },
            { name: "Vladimir Poutine !", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_%282020-02-20%29.jpg/220px-Vladimir_Putin_%282020-02-20%29.jpg" },
            { name: "Emmanuel Macron !", image: "https://www.elysee.fr/cdn-cgi/image/width=720%2Cheight=1080/images/default/0001/13/22e85bb25185f2f19748178a2f46713c11a32913.jpg" },
            { name: "Valérie Pécresse !", image: "https://img.lemde.fr/2021/12/05/0/0/3000/4500/664/0/75/0/a544d40_805585537-lgeai-lr-4dec15.jpg" },
            { name: "Joe Biden !", image: "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/personnalites/joe-biden/94355106-1-fre-FR/Joe-Biden.jpg" },
            { name: "Eric Zemmour !", image: "https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/22/14/eric-zemmour-les-coulisses-d-une-mise-sur-orbite-politique.jpg?VersionId=XpV1PM0jCpQMKEoW8eXlrz7RdaRNfrPc" },
            { name: "Fabien Roussel !", image: "https://www.linfodurable.fr/sites/linfodurable/files/2022-02/Fabien%20Roussel%3AAFP%2024%20janvier%202022%20Paris%2C%20France.jpg" },
            { name: "BNT Feujjj !", image: "https://cdn.discordapp.com/avatars/876126492604641370/302a88c035de51a14febce6b6977280d.webp?size=4096" },
            { name: "Titicraft :", image: "https://cdn.discordapp.com/avatars/1121469694562537512/7b3a66f4ff5f2405d07c73ea95e099ae.webp?size=4096" },
            { name: "Donald Trump", image: "https://www.parismatch.com/lmnr/var/pm/public/media/image/Donald-Trump_0.jpg?VersionId=deBgiQsMMhj2dAtw0zup8_D3sUdzU4YZ" },
            // Ajoutez d'autres politiciens avec leurs images
        ];

        let result = Math.floor(Math.random() * politicians.length);

        const embed = new Discord.MessageEmbed()
            .setTitle('Politique')
            .setDescription(`${member.user.username} vote pour ||${politicians[result].name}||`)
            .setColor(15844367)
            .setImage(politicians[result].image);

        message.reply({ embeds: [embed] });
    }
};
