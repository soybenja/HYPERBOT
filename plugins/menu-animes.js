import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
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
    const str = `┏━━━━•💌 𝙓𝙞𝙖𝘽𝙤𝙩-𝙈𝘿 💌•━━━━┓
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
┃「 🌸𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀🌸 」
┃╭───────⧟⭑⧟───────•
┃│🌸.𝙡𝙤𝙡𝙞𝙫𝙞𝙙
┃│🌸.𝙡𝙤𝙡𝙞 
┃│🌸.𝙥𝙥𝙘𝙤𝙪𝙥𝙡𝙚 
┃│🌸.𝙣𝙚𝙠𝙤 
┃│🌸.𝙬𝙖𝙞𝙛𝙪 
┃│🌸.𝙖𝙠𝙞𝙧𝙖 
┃│🌸.𝙖𝙠𝙞𝙮𝙖𝙢𝙖 
┃│🌸.𝙖𝙣𝙣𝙖 
┃│🌸.𝙖𝙨𝙪𝙣𝙖 
┃│🌸.𝙖𝙮𝙪𝙯𝙖𝙬𝙖 
┃│🌸.𝙗𝙤𝙧𝙪𝙩𝙤 
┃│🌸.𝙘𝙝𝙞𝙝𝙤 
┃│🌸.𝙘𝙝𝙞𝙩𝙤𝙜𝙚 
┃│🌸.𝙙𝙚𝙞𝙙𝙖𝙧𝙖 
┃│🌸.𝙚𝙧𝙯𝙖 
┃│🌸.𝙚𝙡𝙖𝙞𝙣𝙖 
┃│🌸.𝙚𝙗𝙖 
┃│🌸.𝙚𝙢𝙞𝙡𝙞𝙖 
┃│🌸.𝙝𝙚𝙨𝙩𝙞𝙖 
┃│🌸.𝙝𝙞𝙣𝙖𝙩𝙖 
┃│🌸.𝙞𝙣𝙤𝙧𝙞 
┃│🌸.𝙞𝙨𝙪𝙯𝙪 
┃│🌸.𝙞𝙩𝙖𝙘𝙝𝙞 
┃│🌸.𝙞𝙩𝙤𝙧𝙞 
┃│🌸.𝙠𝙖𝙜𝙖 
┃│🌸.𝙠𝙖𝙜𝙪𝙧𝙖 
┃│🌸.𝙠𝙖𝙤𝙧𝙞 
┃│🌸.𝙠𝙚𝙣𝙚𝙠𝙞 
┃│🌸.𝙠𝙤𝙩𝙤𝙧𝙞 
┃│🌸.𝙠𝙪𝙧𝙪𝙢𝙞 
┃│🌸.𝙢𝙖𝙙𝙖𝙧𝙖 
┃│🌸.𝙢𝙞𝙠𝙖𝙨𝙖 
┃│🌸.𝙢𝙞𝙠𝙪 
┃│🌸.𝙢𝙞𝙣𝙖𝙩𝙤
┃│🌸.𝙣𝙖𝙧𝙪𝙩𝙤
┃│🌸.𝙣𝙚𝙯𝙪𝙠𝙤
┃│🌸.𝙨𝙖𝙜𝙞𝙧𝙞
┃│🌸.𝙨𝙖𝙨𝙪𝙠𝙚
┃│🌸.𝙨𝙖𝙠𝙪𝙧𝙖
┃│🌸.𝙘𝙤𝙨𝙥𝙡𝙖𝙮
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
    conn.reply(m.chat, '🔮 𝙀𝙨𝙩𝙚 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙩𝙚𝙧𝙣𝙤 𝙥𝙤𝙧 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤. 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙤 𝙖𝙡 𝙨𝙩𝙖𝙛𝙛.', m);
  }
};
handler.command = /^(menuanimes|menúanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}