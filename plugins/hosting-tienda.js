let handler = async(m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let imagenes = ["https://pomf2.lain.la/f/dye13c4r.jpg",
"https://pomf2.lain.la/f/fgyvoz38.jpg",
"https://pomf2.lain.la/f/jq33eb3h.jpg"]

let img = imagenes[Math.floor(Math.random() * imagenes.length)]

    let don = `*Bienvenid@ \`${name}\` a nuestra tienda virtual, donde podrás encontrar los precios ofrecidos por TK-Hosting.*

*\`PRECIOS EN PAYPAL 💵\`*

🛒 *\`$2.43\`* TK-Coins 500
🛒 *\`$4.55\`* TK-Coins 1000
🛒 *\`$6.66\`* TK-Coins 1500
🛒 *\`$8.77\`* TK-Coins 2000
🛒 *\`$10.89\`* TK-Coins 2500
🛒 *\`$21.46\`* TK-Coins 5000
🛒 *\`$42.60\`* TK-Coins 10600

*\`PRECIOS EN SOLES 🇵🇪\`*

🛒 *\`S/4\`* TK-Coins 250
🛒 *\`S/8\`* TK-Coins 500
🛒 *\`S/16\`* TK-Coins 1000 
🛒 *\`S/24\`* TK-Coins 1500 
🛒 *\`S/32\`* TK-Coins 2000
🛒 *\`S/40\`* TK-Coins 2500
🛒 *\`S/84\`* TK-Coins 5000
🛒 *\`S/168\`* TK-Coins 10600

*Contactos y Compras 🛒*
- wa.me/51910234457 (Propietario)`
await m.react('🛒') 
 conn.sendMessage(m.chat, {
        text: don,
        contextInfo: {
        externalAdReply: {
        title: 'ＴＫ － ＴＩＥＮＤＡ ＶＩＲＴＵＡＬ 🛒',
        body: '¡El servicio ideal para llevar tus proyectos al siguiente nivel!',
        thumbnailUrl: img,
        sourceUrl: 'https://dash.tk-joanhost.com',
        mediaType: 1,
        renderLargerThumbnail: true
        }}},
        { quoted: m})
}

handler.help = ['tiendatk']
handler.tags = ['tk']
handler.command = /^(tiendatk|tkprecios)$/i 

export default handler