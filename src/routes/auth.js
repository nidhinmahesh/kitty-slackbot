const router = require('.')();

router.post('/addToSlack', () => {
  
  // TODO: Add validated signups to database
});

router.post('/user/signin', () => {
  // TODO: Validate user signin, send an access token for our app dashboard APIs
});

module.exports = router;
