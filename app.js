import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () =>{
    console.log("Bot is running...");
});

client.on('messageCreate', m =>{
    if (m.content === "hi") {
        return m.reply({content: "hello"});
    }
});

client.login('Nzk2NTY5MDYzMDUyNDEwOTUw.X_Z0wA.fTRhzLTOMPTK_xHbvzPis2QjEgw');