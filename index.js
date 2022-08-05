// const fs = require('node:fs');
// const path = require('node:path');
// const { Client, Collection, GatewayIntentBits } = require('discord.js');

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.commands = new Collection();
// const commandsPath = path.join(__dirname, 'commands');
// const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
// 	const filePath = path.join(commandsPath, file);
// 	const command = require(filePath);
// 	client.commands.set(command.data.name, command);
// }

// client.once('ready', () => {
// 	console.log('Ready!');
// });

// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

// 	const command = client.commands.get(interaction.commandName);

// 	if (!command) return;

// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
// 	}
// });

// const eventsPath = path.join(__dirname, 'events');
// const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// for (const file of eventFiles) {
// 	const filePath = path.join(eventsPath, file);
// 	const event = require(filePath);
// 	if (event.once) {
// 		client.once(event.name, (...args) => event.execute(...args));
// 	} else {
// 		client.on(event.name, (...args) => event.execute(...args));
// 	}
// }

// client.login(process.env.DISCORD_TOKEN);


// const { Client } = require('espn-fantasy-football-api/node');
// require('dotenv').config();
// const LEAGUE_ID = process.env.LEAGUE_ID;
// const ESPN_S2 = process.env.ESPN_S2;
// const SWID = process.env.SWID;
// const SEASON_ID = process.env.SEASON_ID;

// const myClient = new Client({leagueId: LEAGUE_ID});
// myClient.setCookies({espnS2: ESPN_S2, SWID: SWID });
// async function getEspnData() {
// const getData = await myClient.getBoxscoreForWeek({
//     seasonId: SEASON_ID,
//     matchupPeriodId: 1,
//     scoringPeriodId:1
// });
// return getData;
// }
// async function getEspnTeams() {
//     const getTeams = await myClient.getTeamsAtWeek ({
//         seasonId: SEASON_ID,
//         matchupPeriodId: 1,
//         scoringPeriodId: 1
//     });
//     return getTeams;
// }


// getEspnTeams().then((result)=> {
//     const teamData = result.map(({ id,name }) => ({ id,name }));
//     getEspnData().then((result)=> {
//         const boxScores = result;
//         console.log(boxScores)
//         const newData = boxScores.filter(o1 => teamData.map(o2 => {o1.homeTeamId === o2.id ? o1["homeTeamname"] = o2.name : null;}));
//         const newerData = newData.filter(o1 => teamData.map(o2 => {o1.awayTeamId === o2.id ? o1["awayTeamname"] = o2.name : null;}));
//         console.log(teamData,boxScores)

//     });
// });


// const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser(Browser.CHROME).build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//   } finally {
//     await driver.quit();
//   }
// })();

const { Builder, By } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

(async function hello() {
    let driver;

    try {
        //Browser Setup
        let builder = new Builder().forBrowser('chrome');
        let options = new Options();
        options.headless();                             // run headless Chrome
        options.excludeSwitches(['enable-logging']);    // disable 'DevTools listening on...'
        options.addArguments(['--no-sandbox']);         // not an advised flag but eliminates "DevToolsActivePort file doesn't exist" error.
        driver = await builder.setChromeOptions(options).build();

        // Navigate to Google and get the "Google Search" button text.
        await driver.get('https://fantasy.espn.com/');
    } catch (e) {
        console.log(e);
    } finally {
        if (driver) {
            await driver.close();   // helps chromedriver shut down cleanly and delete the "scoped_dir" temp directories that eventually fill up the harddrive.
            await driver.quit();
        }
    }
})();