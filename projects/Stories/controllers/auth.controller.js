const passport = require('passport');

// Auth with Google - Get /auth/google
exports.google = passport.authenticate('google', { scope: ['profile']})

// Google auth Callback - Get /auth/google/callback
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/'}), 
(req, res) => {
    res.redirect('/dashboard')
}