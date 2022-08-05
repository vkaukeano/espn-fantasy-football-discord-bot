ESPN Fantasy Football Bot

Getting Started 

Useful URLS
- [Discord JS Documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
  - Explains how to get Discord Token, Client ID, and Guild Id.
  - Need to create a discord server for testing. 
  - [Create Server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-)
  - [Add Bot to Server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [ESPN API JS Client](http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/)
  - Login to your espn fantasy football team in a browser.
  - Click your fantasy league.
  - The URL will append the league ID.
  - ESPN_S2 and SWID are cookies found in the application section in dev tools.
  - Season ID is the year you would like to pull data from. (2021,2022,et)

Add .env

```shell
DISCORD_TOKEN=
CLIENT_ID=
GUILD_ID=
LEAGUE_ID=
ESPN_S2=
SWID=
SEASON_ID=
```

Yarn 
```shell
yarn install
```

NPM
```shell
npm install
```
Docker 
- Build Image
```shell
docker build . -t <yourusername>/<image-name> .
```
- Run Image
```shell
docker run --rm <yourusername>/<image-name>
```

Discord
- Open discord and open a thread.
- Type "/leaguename".
- Should return your fantasy football league name.

