const { App, ExpressReceiver } = require('@slack/bolt');
require('dotenv').config();

  const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });

  const app = new App({
    receiver,
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET

    // authorize: () => {
    //   const workspace = null; // TODO: fetch workspace data from db
  
    //   if (workspace) {
    //     return {
    //       botToken: process.env.SLACK_BOT_TOKEN,
    //       botId: workspace.botId,
    //       botUserId: workspace.botUserId,
    //     };
    //   }
    //   throw new Error('No matching authorizations');
    // },
  });

  app.message('meow', async ({ message, say }) => {
    await say(`mwoooow <@${message.user}> meoouuu!`);
  });
  
  (async () => {
    await app.start(process.env.PORT);
    console.log(' 🐈');
  })();

  module.exports = {
    app,
    express: receiver,
  };
  
  // circular dependency
  require('./routes');