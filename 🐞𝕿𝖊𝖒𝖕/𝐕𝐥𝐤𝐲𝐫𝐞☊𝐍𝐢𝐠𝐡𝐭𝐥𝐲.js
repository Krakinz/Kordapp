`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
require(`dotenv`);
const fs = require("fs");
var http = require("http");
const path = require('path');
const Kron = require("node-cron");
const express = require("express");
const Heroku = require(`heroku-client`);
console.log("🚀𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐮𝐭𝐨𝐋𝐦 𝐒𝐜𝐫𝐢𝐩𝐭 𝐒𝐭𝐚𝐫𝐭𝐞𝐝...");
const HerokuClient = new Heroku({
token: process.env.HEROKU_API_KEY,
});
Kron.schedule("0 */15 * * * *", async () => {
console.log("⚡𝐑𝐞𝐛𝐨𝐭𝐢𝐧𝐠 𝐕𝐥𝐤𝐲𝐫𝐞 𝐞𝐯𝐞𝐫𝐲 𝟏𝟓𝐦𝐢𝐧𝐬!");
await HerokuClient.delete(
`/apps/` + process.env.HEROKU_APP_NAME + `/dynos/` + `worker`
).catch((error) => console.log(error));
});
const 𝕿𝖊𝖒𝖕 = express();
𝕿𝖊𝖒𝖕.get("/", (Feeds, Resp) => {
if (Feeds) console.log(Feeds);
Resp.send(path.join(__dirname+'/index.html'));
});
𝕿𝖊𝖒𝖕.listen(8080, () => {
console.log(`🦋𝐕𝐥𝐤𝐲𝐫𝐞: Server Ready!`);
});
// http.createServer(function (req, res) {
// res.send(fs.readFileSync("./𝐕𝐥𝐤𝐲𝐫𝐞⌬𝐍𝐢𝐠𝐡𝐭𝐥𝐲.html"));
// res.end();
// })
// .listen(8080);
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;