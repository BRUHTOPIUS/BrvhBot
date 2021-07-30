const { Client, RichEmbed, MessageEmbed, MessageReaction, Message } = require("discord.js");
const { token } = require("./token.json");

const bot = new Client();

bot.on("ready", () => {
    console.log("Ready to faithfully serve the Repvblic!");
});

bot.on("message", (message) => {
    if (message.author.bot) return;
});

bot.login(token);