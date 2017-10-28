var express = require('express');
var router = express.Router();

var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy
var JirenguStrategy = require('passport-jirengu').Strategy

/* GET auth page. */

passport.serializeUser(function(user,done){
	/*console.log('---serializeUser---')
	console.log(user)
	console.log(null,user)*/
	done(null, user);
})

passport.deserializeUser(function(obj,done){
	/*console.log('---deserializeUser---')
	console.log(null,obj)*/
	done(null, obj);
})
 
passport.use(new GitHubStrategy({
		// tokenURL: 'https://github.com/login/oauth/authorize',
    clientID: '0fe32cf883f55ef5706b',
    clientSecret: '534f45ecd32303183813d4a63f254021060bd449',
    callbackURL: "http://localhost:3011/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    done(null, profile);
  }
));

router.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
})

router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {

  	console.log('------------come!!!--------------')
    req.session.user = {
      id: req.user.id,
      username: req.user.displayName || req.user.username,
      avatar: req.user._json.avatar_url,
      provider: req.user.provider
    };
    res.redirect('/');
  });

module.exports = router;
