const discord = require("discord.js")
const cliente = new discord.Cliente()

cliente.on('ready', ()=> {
    console.log("logado")
})

cliente.on('message', (message) => {
    if (message.content === "oi"){
        message.reply("morre")
    }
})

cliente.login('MTE2MzgzMTgwNjUyMTUxNjE2NA.GShQz6.KDJvryq2Pfj0X-y6yatiMqm5krj9XH3DPlRmTk')