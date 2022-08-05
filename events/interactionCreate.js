const { ModalBuilder } = require('discord.js');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');


module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		if (interaction.commandName === 'leaguename') {
			let driver = new webdriver.Builder()
				.forBrowser('chrome')
				.setChromeOptions(/* ... */)
				.setFirefoxOptions(/* ... */)
				.build();
		}
	},
};