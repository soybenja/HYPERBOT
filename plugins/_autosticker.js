import {sticker} from '../lib/sticker.js';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = db.data.chats[m.chat];
  const user = db.data.users[m.sender];

  if (chat.autosticker && m.isGroup) {
    const q = m;
    let stiker = false;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp/g.test(mime)) return;
    if (/image/g.test(mime)) {
      const img = await q.download?.();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (/video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`❗*𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙌𝙐𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙌𝙐𝙀 𝘿𝙐𝙍𝘼 +7 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎\n\n𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 .𝘿𝙄𝙎𝘼𝘽𝙇𝙀 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍`);
      // await this.sendButton(m.chat, '❗*𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙌𝙐𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙌𝙐𝙀 𝘿𝙐𝙍𝘼 +7 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎', wm, [['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁', '/disable autosticker']], m)
      const img = await q.download();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (m.text.split(/\n| /i)[0]) {
      if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
      else return;
    }
    if (stiker) {
      await mconn.conn.sendFile(m.chat, stiker, null, {asSticker: true});
    }
  }
  return !0;
};
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
