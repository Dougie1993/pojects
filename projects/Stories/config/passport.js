const GoogleStrategy = require('passport-google-oauth20').Strategy
const { create } = require('connect-mongo')
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('hey hey', profile)
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        }

        try {
            let user = await User.findOne({ googleId: profile.id})

            if (user) {
                done(null, user) // pass the user
            } else {
                user = await User.create(newUser)
                done(null, user)
            }
        } catch (err) {
            console.log('hey')
            console.error(err)
        }
    }))

    passport.serializeUser( (user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser( (id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })
}