import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
m.react('🤍')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;  ૈRagna 🍃\nNICKNAME: Ragna\nORG: Ragna\nTITLE:soft\nitem1.TEL;waid=5215646809363:+521 56 4680 9363\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://atom.bio/ragnabot\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:ragnabot27@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;México;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date:27-08-1999\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: packname, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `*👋 Hola ${edtr}, este es el contacto de mi creador *`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator|creador|dueño)$/i

export default handler
