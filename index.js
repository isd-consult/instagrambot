const instagrambot = require('./instagram');

(async () => {

  await instagrambot.initialize();

  // enter username first and then password next
  await instagrambot.login('', '');
  // enter username whom you send message
  await instagrambot.navigateToExampleProfile('');
  await instagrambot.follow();
  // enter message content
  await instagrambot.sendSampleMessage('');
  await instagrambot.browser.close();
  debugger;
})();