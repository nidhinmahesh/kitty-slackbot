const {Router, app} = require('.');
const router = Router();
var userDAL = require('../DAL/userDAL.js');

router.get('/addToSlack', async (req, res) => {

  let code = req.query.code;

    try {
      var result = await app.client.oauth.v2.access({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
      })
        
    } catch (error) {
      res.send(error)
    }

    const { access_token: accessToken, scope: scope, bot_user_id: botUserId, app_id: appId } = result;
    userDAL.registerWorkspace(accessToken, scope, botUserId, appId);

    return status;
});


router.post('/user/signin', () => {
  // TODO: Validate user signin, send an access token for our app dashboard APIs
  // refresh token to renew refresh token. 
});

module.exports = router;
