import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `🔮 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙈𝙚𝙙𝙞𝙖𝙁𝙞𝙧𝙚, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
📓 𝙉𝙤𝙢𝙗𝙧𝙚: ${resEX.filename}
📁 𝙋𝙚𝙨𝙤: ${resEX.filesizeH}
📄 𝙏𝙞𝙥𝙤: ${resEX.ext}

⏳ 𝙀𝙨𝙥𝙚𝙧𝙚 𝙚𝙣 𝙡𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙤 𝙨𝙪 𝙖𝙧𝙘𝙝𝙞𝙫𝙤....`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
📓 𝙉𝙤𝙢𝙗𝙧𝙚: ${name}
📁 𝙋𝙚𝙨𝙤: ${size}
📄 𝙏𝙞𝙥𝙤: ${mime}

⏳ 𝙀𝙨𝙥𝙚𝙧𝙚 𝙚𝙣 𝙡𝙤 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙤 𝙨𝙪 𝙖𝙧𝙘𝙝𝙞𝙫𝙤...`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('🔮 𝙀𝙧𝙧𝙤𝙧 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤\n\n𝙑𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚𝙖 𝙨𝙞𝙢𝙞𝙡𝙖𝙧 𝙖\n*◉ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
