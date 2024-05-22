const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `❗𝘽𝙊𝙉𝙄𝙏𝙊 𝘿𝙄𝘼 @${usuarioJid} 𝙏𝙐 𝙏𝙄𝙀𝙈𝙋𝙊 𝘾𝙊𝙈𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙎𝙀 𝘼𝙂𝙊𝙏𝙊`;
        await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''});
      }
    }
  }
}

/* let handler = m => m

export async function all(m) {
  let user = global.db.data.users[m.sender]
  if (m.chat.endsWith('broadcast')) return

  if (user.premiumTime != 0 && user.premium && new Date() * 1 >= user.premiumTime) {
    user.premiumTime = 0
    user.premium = false

    await m.reply(`❗𝘽𝙊𝙉𝙄𝙏𝙊 𝘿𝙄𝘼 @${m.sender.split`@`[0]} 𝙏𝙐 𝙏𝙄𝙀𝙈𝙋𝙊 𝘾𝙊𝙈𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙎𝙀 𝘼𝙂𝙊𝙏𝙊`, m.sender, { mentions: [m.sender] })
  }
}*/
