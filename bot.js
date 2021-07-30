const { Client, RichEmbed, MessageEmbed, MessageReaction, Message } = require("discord.js");
const { token } = require("./token.json");
const { images } = require("./config.json")

const commands = {
    sneed: {
        condition: msg => {
            return msg.content.toLowerCase().includes("sneed");
        },
        action: msg => {
            msg.channel.send(images.sneed);
        }
    },
    cope: {
        condition: msg => {
            const lm = msg.content.toLowerCase();
            return lm.includes("cope") || lm.includes("seethe");
        },
        action: msg => {
            msg.channel.send(images.cope);
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