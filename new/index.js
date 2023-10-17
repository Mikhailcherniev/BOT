import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
})

client.on('ready', () => {
    console.log("funcional");
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oi"){
        message.reply("Aqui esta minhas musicas:")
    }else{
        message.reply("imagine as pessoa tudo")
    }

    if(message.author.bot) return
    if(message.content == "mostre"){
        message.reply("Imagine")
    }
})

client.login(process.env.TOKEN)