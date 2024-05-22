import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `❗𝙋𝙊𝙍𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙇𝙊 𝙈𝙊𝘿𝙄𝙁𝙄𝙌𝙐𝙀`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '❗ *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙌𝙐𝙀 𝙀𝙎𝙏𝙀 𝙉𝙊𝙈𝘽𝙍𝙀 𝙏𝙄𝙀𝙉𝙀 +25 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
