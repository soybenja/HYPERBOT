import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: '𝙇𝙄𝙉𝙆 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊',
      body: '𝚇𝚒𝚊𝙱𝚘𝚝-𝙼𝙳',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://www.instagram.com/usxr_angelito`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
