var express = require('express');
var session = require('cookie-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use("/assets", express.static(__dirname + '/assets'));

app.use('/', express.static(__dirname + '/public'));

// process the login form
app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile.html', // redirect to the secure profile section
  failureRedirect : '/login.html' // redirect back to the signup page if there is an error
}));


// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) { // callback with email and password from our form
  // find a user whose email is the same as the forms email
  // we are checking to see if the user trying to login already exists
  User.findOne({ 'local.email' : email }, function(err, user) {
  // if there are any errors, return the error before anything else
  if (err)
  return done(err);
  // if no user is found, return the message
  if (!user)
//   return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
  return done(null, false, false); // req.flash is the way to set flashdata using connect-flash
  // if the user is found but the password is wrong
  if (!user.validPassword(password))
//   return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
  return done(null, false, false); // create the loginMessage and save it to session as flashdata
  // all is well, return successful user
  return done(null, user);
  });
}));


http.listen(8080, function(){
	console.log('listening on *:8080');
});