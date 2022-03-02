import { Client } from "discord.js";
import 'dotenv/config';
const client = new Client({ intents: ["DIRECT_MESSAGES", "GUILD_MESSAGES", "GUILDS", "GUILD_PRESENCES"] });

client.once('ready', () =>{
    console.log("Bot is running...");
});

client.on('messageCreate', m =>{
    if (m.content === "hi") {
        return m.reply({content: "hello"});
    }
});

client.on('presenceUpdate', (oldPresence, newPresence) =>{
    const guild = client.guilds.cache.get('750736254676762725');
    const modChannel = guild.channels.cache.get('899579969041223680');
    if (!newPresence.activities[0]) return;
    if (newPresence.user.bot) return;
    if (!oldPresence.activities) {
        oldPresence.activities = [
            {
                name: ""
            }
        ];
    }
    if (!oldPresence.activities[0]) {
        oldPresence.activities[0] = {
            name: ""
        };
    }
    if (oldPresence.activities[0].name === newPresence.activities[0].name) return;
    console.log(`${newPresence.user.tag} is now playing ${newPresence.activities[0].name} (${newPresence.activities[0].id})`);
    modChannel.send(`${newPresence.user.tag} is now playing ${newPresence.activities[0].name} (${newPresence.activities[0].id})`);
});

client.login(process.env.CLIENT_TOKEN);