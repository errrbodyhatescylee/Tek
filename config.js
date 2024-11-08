//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/c9f74p.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "2347015109979";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/abwzu2.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEIxYzRrdjczSUZ0R3A2eU5rT0l4aE15RXRxODltTWZ6QjdyTS9CK2xFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXBTa0lKLy9DajJ2bWFEdjZkWnhFYTNzbnZxdDZxd0JMMEJ4cytNSWN5dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTldiYUNTZ2VUSkJ6Vm43aHFWVGJia3p6cGQxdk5laUpacmhuQjZiTEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSE5hVmEvdCtKbnZxOWFITGhCZWY2c2FLandjR09uTDNOMENpMlF2dWkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNR0c4UkdYcmxPMmlicC9tVDhHUjRkbmh3OEVRNVpmK3hzMGdQdkVCMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ1OXh6cllOWTRYV3hEek10d2ZDbGl5V2ZYeWw4UHFqVGNZZXp4S2dhRzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dWVmlCZGQ4UUFKQWhsREF6RFdPNG5vT0JPWUJKVjc4eCt3ZEZQSkRsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1JMYTNvdHE4ajltQm9CV1BzbzBBNmxlSGZBaCsxZlViQ3pKQTlXMDNoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB6ZnBmV3pnZVdoQUNadEhsYlB0c1VhNW42azl1TkNDUElvS0pYQkxjVEZtVVlKVy96WklyUmwzeUpCNE91cy9tR1dxdmpsdGdVbk82TUxENHZyT0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJUcHVPU2NYMkJUMFZuNVZqSWwxTnFSbkFTMzl0em00UGRIUTc3REJaenE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLLWRncW1uVVQ3T21XRTRidTl2MWhBIiwicGhvbmVJZCI6IjAyZWZiZTE4LWQyZGEtNGE4Yy05MDAzLTVkNzljNzRkODRiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdktzUzl1U2NUMENKNzJueUlTaTB1cVg2OGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnN4cHpZdFhqc05iZ1lDRTNwKzVQUEdFK3VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxFWUxQQTYyIiwibWUiOnsiaWQiOiIyMzQ3MDE1MTA5OTc5OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04zejNPa0dFUHY0dDdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVMd3BXZGlNUG91T05GcTJuL2RFOXFGM1VsekFUekp5L21QaTl2S0tBa0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJ3Q0J4UjN2dXQvQXRqaFVIU0U1VFlUa0JFaXdaam1yQXpIQzhzZ2tHdWh6aUVuRlhzdm8vT2lEZlJZTFpOR01aUkJOZ2Q4bG9ZWnNaa2w4SEZ3Q0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJcUxsaTJOYXpiTlJrc1cvN2podFN4QmprY3ZpNnEwcmxzSDRIc0RHTXAzV2NVN3BsRWk2ZnJ6akNqelo4c09WSVN1SllXWkhQTnJFRlBUbUtUclFCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTUxMDk5Nzk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUzhLVm5ZakQ2TGpqUmF0cC8zUlBhaGQxSmN3RTh5Y3Y1ajR2YnlpZ0pCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDY3MDE3fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`LONG LIVE THE G.O.A.T. Jw.999🧃🌍™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "juice wrld 999",
  ownername: process.env.OWNER_NAME || "Wrld TEknology",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
