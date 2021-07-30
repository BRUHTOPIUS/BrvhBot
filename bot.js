const { Client } = require("discord.js");
const { token } = require("./token.json");

const bot = new Client();

bot.on("ready", () => {
    console.log("Ready to faithfully serve the Repvblic!");
});

bot.login(token);