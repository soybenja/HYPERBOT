const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `🔮 @${usuarioJid} 𝙏𝙪 𝙩𝙞𝙚𝙢𝙥𝙤 𝙘𝙤𝙢𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤. 𝙔𝙖 𝙣𝙤 𝙚𝙧𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢`;
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

    await m.reply(`🔮 @${m.sender.split`@`[0]} 𝙏𝙪 𝙩𝙞𝙚𝙢𝙥𝙤 𝙘𝙤𝙢𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤. 𝙔𝙖 𝙣𝙤 𝙚𝙧𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢`, m.sender, { mentions: [m.sender] })
  }
}*/
