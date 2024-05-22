const toxicRegex = /SJADJASDJASJGFHJDFKHGFDJKGDFHKGDaFJKHGDKAHSKIDHUITOAIDXFOKJNFVBNCM,VBNCV,MB6/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*[❗] ' + `${user.warn == 1 ? `❗𝘽𝙊𝙉𝙄𝙏𝙊 𝘿𝙄𝘼 @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, 𝘿𝙀𝘾𝙄𝙍 𝙇𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼 "${isToxic}" 𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙋𝙊𝙍 *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏*. 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`❗𝘽𝙊𝙉𝙄𝙏𝙊 𝘿𝙄𝘼 @${m.sender.split`@`[0]}, *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼 𝙌𝙐𝙀 𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 5 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘿𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 .𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊.`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
