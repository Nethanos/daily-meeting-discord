const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require("cron");



let scheduledMessage = new cron.CronJob('35 17 * * 1-5');

client.on('ready', () => {
    client.channels.fetch('691687808439681077').then(response => {
        scheduledMessage.addCallback(() => {
            response.send("HORA DA DAILY");
        })

        scheduledMessage.start();

    })
})

client.login('Njg5OTIyNjQ1MjM5NjYwNTc4.Xnjkfw.0as4grX-0ApCOj0jUvkHIzgg3Lc');




  
