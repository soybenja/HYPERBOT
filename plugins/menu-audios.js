import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━•💌 𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿 💌•━━━━┓
│╭─────────♡─────────╮
││•🔮¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
│╰─────────♡─────────╯
││•🔮𝘾𝙍𝙀𝘼𝘿𝙊𝙍/𝘼 
││•🔮 wa.me/59168683798
││•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
││•🔮𝙁𝙀𝘾𝙃𝘼: ${date}
││•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🔊𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎🔊 」
┃╭───────⧟⭑⧟───────•
┃│🔊𝙌𝙪𝙞𝙚𝙣 𝙚𝙨 𝙩𝙪 𝙨𝙚𝙢𝙥𝙖𝙞 𝙗𝙤𝙩𝙨𝙞𝙩𝙤 7𝙬7
┃│🔊𝙏𝙚 𝙙𝙞𝙖𝙜𝙣𝙤𝙨𝙩𝙞𝙘𝙤 𝙘𝙤𝙣 𝙜𝙖𝙮 
┃│🔊𝙉𝙤 𝙙𝙞𝙜𝙖𝙨 𝙚𝙨𝙤 𝙥𝙖𝙥𝙪 
┃│🔊𝘼 𝙣𝙖𝙙𝙞𝙚 𝙡𝙚 𝙞𝙢𝙥𝙤𝙧𝙩𝙖
┃│🔊𝙁𝙞𝙚𝙨𝙩𝙖 𝙙𝙚𝙡 𝙖𝙙𝙢𝙞𝙣
┃│🔊𝙁𝙞𝙚𝙨𝙩𝙖 𝙙𝙚𝙡 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧
┃│🔊𝙑𝙞𝙫𝙖𝙣 𝙡𝙤𝙨 𝙣𝙤𝙫𝙞𝙤𝙨 
┃│🔊𝙁𝙚𝙡𝙞𝙯 𝙘𝙪𝙢𝙥𝙡𝙚𝙖ñ𝙤𝙨 
┃│🔊𝙉𝙤𝙘𝙝𝙚 𝙙𝙚 𝙥𝙖𝙯 
┃│🔊𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨 
┃│🔊𝘽𝙪𝙚𝙣𝙤𝙨 𝙩𝙖𝙧𝙙𝙚𝙨 
┃│🔊𝘽𝙪𝙚𝙣𝙤𝙨 𝙣𝙤𝙘𝙝𝙚𝙨 n 
┃│🔊𝘼𝙪𝙙𝙞𝙤 𝙝𝙚𝙣𝙩𝙖𝙞 
┃│🔊𝘾𝙝𝙞𝙘𝙖 𝙡𝙜𝙖𝙣𝙩𝙚 
┃│🔊𝙁𝙚𝙡𝙞𝙯 𝙣𝙖𝙫𝙞𝙙𝙖𝙙
┃│🔊𝙑𝙚𝙩𝙚 𝙖 𝙡𝙖 𝙫𝙧𝙜
┃│🔊𝙋𝙖𝙨𝙖 𝙥𝙖𝙘𝙠 𝘽𝙤𝙩 
┃│🔊𝘼𝙩𝙚𝙣𝙘𝙞𝙤𝙣 𝙜𝙧𝙪𝙥𝙤
┃│🔊𝙈𝙖𝙧𝙞𝙘𝙖 𝙦𝙪𝙞𝙚𝙣
┃│🔊𝙈𝙪𝙧𝙞𝙤 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤
┃│🔊𝙊𝙝 𝙢𝙚 𝙫𝙚𝙣𝙜𝙤
┃│🔊𝙩𝙞𝙤 𝙦𝙪𝙚 𝙧𝙞𝙘𝙤
┃│🔊𝙑𝙞𝙚𝙧𝙣𝙚𝙨 𝘽𝙖𝙣𝙚𝙖𝙙𝙤
┃│🔊𝙎𝙚𝙭𝙤
┃│🔊𝙃𝙤𝙡𝙖
┃│🔊𝙏𝙧𝙖𝙠𝙖
┃│🔊𝙈𝙖𝙣𝙘𝙤
┃│🔊𝙏𝙪𝙧𝙞𝙥
┃│🔊𝙃𝙞𝙢𝙣𝙤 𝙥𝙤𝙩𝙖𝙭𝙞𝙚 
┃│🔊𝙈𝙞𝙖𝙪
┃│🔊𝙋𝙧𝙤𝙗𝙧𝙚 𝙥𝙚𝙧𝙧𝙖
┃│🔊𝙐𝙣 𝙥𝙖𝙩𝙤 
┃│🔊𝙉𝙮𝙖𝙣𝙥𝙖𝙨𝙪
┃│🔊𝙏𝙚 𝙖𝙢𝙤
┃│🔊𝙔𝙖𝙢𝙚𝙩𝙚 
┃│🔊𝘽𝙖ñ𝙖𝙩𝙚 
┃│🔊𝙀𝙨 𝙥𝙪𝙩𝙤 
┃│🔊𝙇𝙖 𝙗𝙞𝙗𝙡𝙞𝙖 
┃│🔊𝙊𝙣𝙞𝙘𝙝𝙖𝙣 
┃│🔊𝙈𝙞𝙚𝙧𝙙𝙖 𝙙𝙚 𝘽𝙤𝙩 
┃│🔊𝙎𝙞𝙪𝙪𝙪 
┃│🔊𝙀𝙥𝙞𝙘𝙤 
┃│🔊𝙎𝙝𝙞𝙩𝙥𝙤𝙨𝙩 
┃│🔊𝙍𝙖𝙬𝙧 
┃│🔊𝙐𝙬𝙐 
┃│🔊:𝙘 
┃│🔊𝙖
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '💜𝙀𝙨𝙩𝙚 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙩𝙚𝙧𝙣𝙤 𝙥𝙤𝙧 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤. 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙤 𝙖𝙡 𝙨𝙩𝙖𝙛𝙛.', m);
  }
};
handler.command = /^(menuaudio|menuaudios|menúaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}