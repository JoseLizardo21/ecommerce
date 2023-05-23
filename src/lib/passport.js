const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameFiedl: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done)=>{
    const user = {
        username: "Usuario",
        id: 1
    }
    if(username == "usuario"){
        if(password == "usuario"){
            done(null, user, req.flash("success", 'Bienvenido'));
        }else{
            done(null, false, req.flash("message", 'Contraseña incorrecta'))
        }
    }else{
        return done(null, false, req.flash('message', 'Es usuario no existe'));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameFiedl: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done)=>{
    const { fullname } = req.body;
    const newUser = {
        username,
        password,
        fullname
    };
    newUser.password = await helpers.encrypPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = result.insertId;
   return done(null, newUser);
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    done(null, 0);
});