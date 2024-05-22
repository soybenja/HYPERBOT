const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('❗ *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝙊 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊');
  } else throw `❗𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼𝙎 𝙌𝙐𝙀 *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙈𝙊𝘿𝙄𝙁𝙄𝙌𝙐𝙀, 𝙐𝙎𝙀:\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
