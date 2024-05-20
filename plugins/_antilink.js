const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*🔖 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 .𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙀𝙎𝙏𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊, 𝙋𝙀𝙍𝙊 𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙌𝙐𝙀 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `「 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆𝙎 」*\n𝙃𝙖𝙨𝙩𝙖 𝙡𝙖 𝙫𝙞𝙨𝙩𝙖 𝙗𝙖𝙗𝙮 👋 ${user} 𝙧𝙤𝙢𝙥𝙞𝙨𝙩𝙚 𝙡𝙖𝙨 𝙧𝙚𝙜𝙡𝙖𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤...!!`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('🔮 𝙀𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣, 𝙉𝙤 𝙥𝙪𝙚𝙙𝙚 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧 𝙖𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('🔮  𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙖𝙙𝙤 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙡𝙤 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙚');
  }
  return !0;
}
