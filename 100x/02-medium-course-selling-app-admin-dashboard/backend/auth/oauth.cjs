const express = require('express')
const cors = require('cors');
const app = express();
const session = require('express-session')
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // Enable sending cookies and other credentials
  };
app.use(cors(corsOptions));
const port = 3001
app.set('view engine','ejs');

app.use(session({
    secret : 'SECRET',
    resave : false,
    saveUninitialized : true
}));

/* Passport Setup */

const passport = require('passport')
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs')

// app.get('/success',(req,res) => res.send(userProfile));
app.get('/success',(req,res)=>{
    console.log(userProfile)
    res.send(userProfile)
})
app.get('/error',(req,res) => res.send("error Loggin in"));

passport.serializeUser(function(user, done) {
  console.log("Serializing");
  console.log(JSON.stringify(user))
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("Deserializing")
  userProfile=obj;
  console.log(userProfile)
  done(null, obj);
});

/* Google AUTH */
const GoogleStrategy = require('passport-google-oauth20').Strategy;// GOOGLE STRATEGY
const GOOGLE_CLIENT_ID = '414536054328-9n5jm6mv43qau9bjjb04nnqkpasn17pt.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID : GOOGLE_CLIENT_ID,
    clientSecret : GOOGLE_CLIENT_SECRET,
    callbackURL : "http://localhost:3001/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done){
        userProfile = profile;
        return done(null,userProfile);
    }
));

app.get('/signGoogle',(req,res)=>{
    // The request will be redirected to Google for authentication, so this
    // the response will be skipped.
    res.redirect('/auth/google');
})

app.get('/auth/google',
    passport.authenticate('google',{scope : ['profile','email']}));

    app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }), // Authenticate using Google strategy
    (req, res) => {
        // If authentication is successful, redirect to '/success' route
        res.redirect('/success');
    });

    
app.listen(port, () => console.log(`Listening on port ${port}...`));