import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['5215646809363', 'RganaDev', true],
  ['5215660166513', 'ArmDev', true],
  ['5215527305507'],
  [''],
  [''],
  [''],
  [''],
  [''],
  ['']

]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
   
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = ' RaganBot'
global.author = '@ragnabot.dzn'
global.namebot = 'RagnaBot'
global.wait = '🔥 ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 🔥'
global.wm = 'RagnaBot'
global.stickpack = `©️ ᴘᴏᴡᴇʀ ʙʏ ʀᴀɢɴᴀʙᴏᴛ`
global.titulowm = 'RagnaBot'
global.titulowm2 = '​🇷​​🇦​​🇬​​🇳​​🇦​​🇧​​🇴​​🇹​ ​🇪​​🇱​ ​🇲​​🇪​​🇯​​🇴​​🇷​'
global.igfg = '@ragnabot.dzn'
global.botname = 'RagnaBot'
global.dev = '_© ​🇷​​🇪​​🇸​​🇪​​🇷​​🇻​​🇪​​🇩​|🇷​​🇦​​🇬​​🇳​​🇦​​🇧​​🇴​​🇹​ *2024*_\n'
global.titu = '©️ ᴘᴏᴡᴇʀ ʙʏ ʀᴀɢɴᴀʙᴏᴛ'
global.textbot = 'ʀᴀɢɴᴀʙᴏᴛ x ʀᴀɢɴᴀ 🔥'
global.listo = '🔥 ​🇦​​🇶​​🇺​​🇮​ ​🇹​​🇮​​🇪​​🇳​​🇪 🔥​'
global.vs = '2.0.0'
global.namechannel = 'ʀᴀɢɴᴀ ʙᴏᴛ -  ᴄʜᴀɴɴᴇʟ'
global.stickauth = `© ​🇷​​🇦​​🇬​​🇳​​🇦​​🇧​​🇴​​🇹​ ​🇧​​🇾​ ​🇷​​🇦​​🇬​​🇳​​🇦​`
global.dis = '🔥'
global.support = {
  ffmpeg: true, // Aquí aseguramos que ffmpeg está habilitado
  ffprobe: true,
  ffmpegWebp: true,
  convert: true,
  magick: false,
  gm: false,
  find: false
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://chat.whatsapp.com/GOQBEelnmES4pXdlZbs6EP'
global.group2 = 'https://chat.whatsapp.com/KtXIoE1BLOjFk3ejE8MzpV'
global.canal = 'https://whatsapp.com/channel/0029VawiRA7F6sn4oYFjjz34'
global.github = 'https://atom.bio/ragnabot' 
global.instagram = 'https://www.instagram.com/ragnabot.dzn' 
global.whatsApp = 'https://wa.me/message/7I73EVE32LJJK1'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'RagnaBot', orderTitle: 'packname', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'RagnaBot', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ꔷ──᜔◇⃟̣̣⃕🔥', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'RagnaBot', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '🔥 RAGNA BOT 🔥', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'RagnaBot', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐒𝐭𝐢𝐜𝐤𝐞𝐫 (^_^♪) 🔥', jpegThumbnail: catalogo }}};

global.estilox = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'RagnaBot', orderTitle: 'packname', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
