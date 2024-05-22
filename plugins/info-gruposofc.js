const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*🧸𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙏𝙀 𝙄𝙉𝙑𝙄𝙏𝘼 𝘼𝙃 𝙐𝙉𝙄𝙍𝙏𝙀 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*

*┣・ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝘿𝙀 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏:*
*┣・* https://chat.whatsapp.com/HZkPROh4Xg4D6gKwjiQXWg`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/boybenjx7`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝘾𝙍𝙀𝘼𝘿𝙊𝙍: 𝘽𝙀𝙉𝙅𝘼𝙈𝙄𝙉 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/boybenjx7',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙃𝙔𝙋𝙀𝙍´𝙑 𝙀𝙇 𝙈𝙀𝙅𝙊𝙍 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/boybenjx7'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
