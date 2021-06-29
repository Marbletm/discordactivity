const { Invite } = require('discord.js');

const GAMES = {
    "YOUTUBE": "755600276941176913",
    "BETRAYAL": "773336526917861400",
    "POKER": "755827207812677713",
    "FISHINGTON": "814288819477020702",
    "CHESS": "832012586023256104"
}


async function execute(interaction) {
    const channelID = interaction.member.voice.channelID;
    if (!channelID) interaction.reply({
        content: "You're not in a voice channel, therefore we couldn't start the game for you.",
        ephemeral: true
    });

    const application = GAMES[interaction.options.get("game").value.toUpperCase()]
    const invite = await activityInvite(channelID, application);
    interaction.reply(`https://discord.com/invite/${invite.code}`);

}

// This was ripped from an npm package, as it didn't work as it was for me.
// (I also only have Discord.JS as dependency now, with it's dependencies of course.)
// https://www.npmjs.com/package/discordjs-activity
async function activityInvite(voiceChannelId, applicationId) {
    return client.api.channels(voiceChannelId).invites.post({
        data: {
            max_age: 86400,
            max_uses: 0,
            target_application_id: applicationId,
            target_type: 2,
            temporary: false,
            validate: null
        },
    }).then(invite => new Invite(client, invite))
}

module.exports = {
    name: "activity",
    execute
}
