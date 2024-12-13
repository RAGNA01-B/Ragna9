const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('🤍') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${pesan}`;
  let teks = `❄🎅🏻𝙰𝙲𝚃𝙸𝚅𝙴𝙽𝚂𝙴 𝙱𝙾𝚃𝚂 𝙻𝙴𝚂 𝙷𝙰𝙱𝙻𝙰 𝚂𝙰𝙽𝚃𝙰 𝙲𝙻𝙰𝚄𝚂🎅🏻❄\ ${participants.length} ❄𝙱𝙾𝚃𝚂:❄\n\n ${oi}\n\n`;
  for (const mem of participants) {
    teks += `┊❄ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭ *${vs}* ୧ ׅ ꒱  ┄  ─ ┄ ⸼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;