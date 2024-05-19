const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${pesan}`;
  const text = `━「 𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘼𝘿𝙈𝙄𝙉𝙎 」━

${oi}

𝘼𝘿𝙈𝙄𝙉𝙎 🔮:
${listAdmin}

[ ⚠ ️] 𝙐𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙘𝙪𝙖𝙣𝙙𝙤 𝙨𝙚 𝙩𝙧𝙖𝙩𝙚 𝙙𝙚 𝙪𝙣𝙖 𝙚𝙢𝙚𝙧𝙜𝙚𝙣𝙘𝙞𝙖!!`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
