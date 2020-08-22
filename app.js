const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  });

  // start ACTION
  app.message('meow', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`mwoooow <@${message.user}> meoouuu!`);
  });

  
  (async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();