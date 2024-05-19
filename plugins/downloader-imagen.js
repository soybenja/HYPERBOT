import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `🔮 𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚 𝙪𝙨𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${usedPrefix + command} Minecraft`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('🔮 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙚𝙨𝙩á 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤. 𝙎𝙞 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙮 𝙙𝙚𝙨𝙚𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤𝙨 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 #enable modohorny');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `🔎 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: ${text}\n🔗 𝙇𝙞𝙣𝙠 ${link}\n🌎 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧: Google`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;
