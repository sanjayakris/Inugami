import { Client } from "discord.js";
import express from "express";
import cors from "cors";
import 'dotenv/config';
import router from "./routes/index.js";
export const client = new Client({ intents: ["DIRECT_MESSAGES", "GUILD_MESSAGES", "GUILDS", "GUILD_PRESENCES"] });
const app = express();

app.use(router);

client.once('ready', () =>{
    console.log("Bot is running...");
});

client.on('messageCreate', m =>{
    if (m.content === "hi") {
        return m.reply({content: "hello"});
    }
});

// client.on('presenceUpdate', (oldPresence, newPresence) =>{
//     const guild = client.guilds.cache.get('750736254676762725');
//     const modChannel = guild.channels.cache.get('899579969041223680');
//     if (!newPresence.activities[0]) return;
//     if (newPresence.user.bot) return;
//     if (!oldPresence.activities) {
//         oldPresence.activities = [
//             {
//                 name: ""
//             }
//         ];
//     }
//     if (!oldPresence.activities[0]) {
//         oldPresence.activities[0] = {
//             name: ""
//         };
//     }
//     if (oldPresence.activities[0].name === newPresence.activities[0].name) return;
//     console.log(`${newPresence.user.tag} is now playing ${newPresence.activities[0].name} (${newPresence.activities[0].id})`);
// });

client.login(process.env.CLIENT_TOKEN);
app.listen(5600, () =>{
    console.log("Server is listening to port 5600");
});