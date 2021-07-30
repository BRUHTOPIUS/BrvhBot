const { Client, RichEmbed, MessageEmbed, MessageReaction, Message } = require("discord.js");
const { or } = require("sequelize/types/lib/operators");
const { token } = require("./token.json");

const commands = {
    sneed: {
        condition: msg => {
            return msg.content.toLowerCase().includes("sneed");
        },
        action: msg => {
            msg.channel.send("https://i.postimg.cc/ncr1T9ZN/image.png");
        }
    }
}

const bot = new Client();

bot.on("ready", () => {
    console.log("Ready to faithfully serve the Repvblic!");
});

bot.on("message", (message) => {
    if (message.author.bot) return;

    Object.values(commands).forEach(command => {
        if (command.condition(message)){
            command.action(message);
        }
    });
});

bot.login(token);