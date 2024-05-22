/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┣・🧸          「 COMPRAR 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┣・🧸 𝙃𝙔𝙋𝙀𝙍´𝙑 𝙏𝙀 𝙎𝘼𝙇𝙐𝘿𝘼 ${name}*
*┃*
*┣・🧸 𝙎𝙄 𝘿𝙀𝙎𝙀𝘼𝙎 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙀𝙉 𝙏𝙐𝙎 𝙂𝙍𝙐𝙋𝙊𝙎, 𝙃𝘼𝘽𝙇𝘼 𝘼 𝙇𝙊𝙎 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀𝙎 𝙉𝙐𝙈𝙀𝙍𝙊𝙎:*
*┣・ https://walink.co/8cfe71*
*┣・ https://walink.co/8cfe71*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^adquir(e|ir)|comprar|compra$/i;
export default handler;
