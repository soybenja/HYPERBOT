export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`❗𝘽𝙊𝙉𝙄𝙏𝙊 𝘿𝙄𝘼 @${m.sender.split`@`[0]}, 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙏𝙄𝙀𝙉𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙀𝙇 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙋𝙊𝙍𝙁𝘼𝙑𝙊𝙍 𝙐𝙎𝘼 𝙈𝙄𝙎 𝘾𝙊𝙈 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n ${md}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
