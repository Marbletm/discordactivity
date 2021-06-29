const slashCommands = require('./commands/commands.json');
const config = require('./config.json');

const fs = require('fs');
const Discord = require("discord.js");

// Use the new intents, don't forget to enable all intents on your application page.
global.client = new Discord.Client({ intents:  [Discord.Intents.ALL] });
client.commands = new Discord.Collection();

// Get all the commands from the commands folder.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", async ()=> {
    // This needs a for loop. But this is all it's supposed to do, so I couldn't care less.
    try {
        if (config.guildId) await client.application.commands.create(slashCommands.slashCommands[0], config.guildId);
    } catch (e) {
        console.error(e);
        // Let people put in random strings for the guildId, I guess. Why not?
    }
    await client.application.commands.create(slashCommands.slashCommands[0]);
});

// Don't check for messages, check for Discord's integrated commands.
client.on("interaction", async (interaction) => {

    // If the interaction is not a command, or the command is not implemented, ignore the command.
    if (!interaction.isCommand()) return;
    if (!client.commands.has(interaction.commandName)) return;

    // Execute that bitch
    try {
        await client.commands.get(interaction.commandName).execute(interaction);
    } catch (error) {
        console.error(error);
        interaction.reply({
            content: "You're not in a voice channel, therefore we couldn't start the game for you.",
            ephemeral: true
        });
    }
})

client.login(config.token);
