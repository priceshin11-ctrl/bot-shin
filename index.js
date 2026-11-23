// BOT WA SHIN
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('SCAN QR INI:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Bot WA Shin Sudah Siap! ✅');
});

client.on('message', async (msg) => {
  const text = msg.body.toLowerCase();
  if (text === '!halo') {
    msg.reply('Halo juga! Aku Bot Shin 🤖');
  } else if (text === '!info') {
    msg.reply('Aku Bot Shin, dibuat priceshin11-ctrl');
  } else if (text === '!menu') {
    msg.reply('Menu Bot Shin:\n!halo - sapa bot\n!info - info bot\n!menu - liat menu ini');
  }
});

client.initialize();
