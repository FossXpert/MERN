const express = require('express')
const app = express();
const session = require('express-session')


app.set('view engine','ejs');

app.use(session({
    secret : 'SECRET',
    resave : false,
    saveUninitialized : true
}));

/* Passport Setup */

const passport = require('passport')
var userProfile;

app.use(passport.initialize)
app.use(passport.session());

app.set('view engine','ejs')

app.get('/success',(req,res) => res.send(userProfile));
app.get('/error',(req,res) => res.send("error Loggin in"));

passport.serializeUser(function(user, done) {
  console.log("serializing");
  console.log(JSON.stringify(user))
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("deserializing")
  userProfile=obj;
  console.log(userProfile)
  done(null, obj);
});

/* Google AUTH */

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = 'our-google-client-id';
const GOOGLE_CLIENT_SECRET = 'our-google-client-secret';


