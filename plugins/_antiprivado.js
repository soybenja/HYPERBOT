export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🔮 𝙃𝙤𝙡𝙖 @${m.sender.split`@`[0]}, 𝙀𝙨𝙩𝙖 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙪𝙣𝙚𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙙𝙚 𝙨𝙤𝙥𝙤𝙧𝙩𝙚\n\nhttps://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
