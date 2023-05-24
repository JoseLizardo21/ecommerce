const express = require('express');
const router = express.Router();
const passport = require('passport');

const {isLoggedIn, isNotLogedIn} = require('../lib/auth');

router.get('/signUp',isNotLogedIn, (req,res)=>{
    res.render('auth/signup');
});
router.post('/signup',isNotLogedIn, passport.authenticate('local.signup',{
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
}));


router.post('/signin', (req, res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true   
    })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile')
})

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});

module.exports = router;