const { Client, RichEmbed, MessageEmbed, MessageReaction, Message } = require("discord.js");
const { token } = require("./token.json");
const { images, paragraphs } = require("./config.json")

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
    },
    pedo: {
        condition: msg => {
            return msg.content.toLowerCase().includes("pedo");
        },
        action: msg => {
            msg.reply(paragraphs.pedo);
        }
    },
    nigger: {
        condition: msg => {
            return msg.content.toLowerCase().includes("nigger");
        },
        action: msg => {
            msg.reply(paragraphs.nigger);
        }
    },
    huey: {
        condition: msg => {
            return msg.content.toLowerCase().includes("music");
        },
        action: msg => {
            msg.reply(paragraphs.huey);
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