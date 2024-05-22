const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*${participants.length} 𝙃𝙔𝙋𝙀𝙍 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎* ${pesan}`;
  let teks = `❗𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙄𝙉𝙑𝙊𝘾𝘼 𝘼𝙃 𝙏𝙊𝘿𝙊𝙎 𝙇𝙊𝙎 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 𝘿𝙀 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n ${oi}\n\n┏・❗𝙍𝙀𝙑𝙄𝙑𝘼𝙉 𝘾𝙏𝙈𝙍<3\n`;
  for (const mem of participants) {
    teks += `┣・🧸 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・ 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
