var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var router = express.Router();


// AUTH ROUTES ======================================

router.get('/github',
  passport.authenticate('github', { scope: [ 'user', 'repo', 'read:org' ] }),
  function(req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the account page.
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // server redirects to url with accessToken in the url
    // mobile client will grab the accessToken from the url and
    // persist it in state locally. subsequent requests to server will
    // supply that accessToken for user lookup
    res.redirect('/account?accessToken=' + req.user.accessToken);
  });

module.exports = router;
