const { SlashCommandBuilder } = require('discord.js');
const { Client } = require('espn-fantasy-football-api/node');
require('dotenv').config();
const LEAGUE_ID = process.env.LEAGUE_ID;
const ESPN_S2 = process.env.ESPN_S2;
const SWID = process.env.SWID;
const SEASON_ID = process.env.SEASON_ID;

const myClient = new Client({leagueId: LEAGUE_ID});
myClient.setCookies({espnS2: ESPN_S2, SWID: SWID });
async function getEspnData() {
const getData = await myClient.getLeagueInfo({
    seasonId: SEASON_ID
});
return getData;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaguename')
		.setDescription('Replies with Fantasy Football League Name!'),
	async execute(interaction) {
        await getEspnData().then((result)=> {
            interaction.reply(result.name);
        });
	},
};