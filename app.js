import { Client, Intents } from "discord.js";
import 'dotenv/config';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () =>{
    console.log("Bot is running...");
});

client.on('messageCreate', m =>{
    if (m.content === "hi") {
        return m.reply({content: "hello"});
    }
});

client.login(process.env.CLIENT_TOKEN);