const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[⚠️ عمل خطأ ⚠️] اكتب نص عن المشكله*\n\n*مثل:*\n *.ابلاغ في مشكله في أمر اليوتيوب*`;
  if (text.length < 10) throw `*[❗تنبيه❗] يجب ان يكون اكتر من 10 حروف علي الأقل!*`;
  if (text.length > 1000) throw `*[❗تنبيه❗] هذا كتير منك شكراً لكل هذا لاكن لا يمكنني ان ارسال رساله اكتر من 1000 حرف!*`;
  const teks = `*❒═════[ _ابــلاغ_ ]═════❒*\n*┬*\n*├❧ الرقـــم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ الـرسـالـه:* ${text}\n*┴*`;
  conn.reply('201030825867@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('201121472631@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ] تـم ارسـال الابـلاغ لمالك سوف نعالج المشكلة في أقرب وقت ممكن*`);
};
handler.help = ['ابلاغ'].map((v) => v + ' <teks>');
handler.tags = ['ابلاغ عن مشكله في البوت'];
handler.command = /^(report|request|ابلاغ|إبلاغ|ابلغ|report-owner|reportes)$/i;
export default handler;
