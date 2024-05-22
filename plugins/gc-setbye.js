const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('❗𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝙊 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘿𝙀𝙎𝙋𝙀𝘿𝙄𝘿𝘼 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊');
  } else throw `❗𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘿𝙀𝙎𝙋𝙀𝘿𝙄𝘿𝘼 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼𝙎 𝙌𝙐𝙀 *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙈𝙊𝘿𝙄𝙁𝙄𝙌𝙐𝙀, 𝙐𝙎𝙀:\n*- @user (mención)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
