const { ExpressReceiver } = require('@slack/bolt');
const { express: { app } } = require('../app');

const Router = () => (new ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  })).router;
  
  module.exports = Router;

  app.use('/auth', require('./auth'));
  