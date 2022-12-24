const StoriesController = require('../controllers/stories.controller')
const AuthController = require('../controllers/auth.controller')
module.exports = (app) => {
    // Login Page
    app.get('/', StoriesController.login),

    // Dashboard
    app.get('/dashboard', StoriesController.dashboard)

    // Google Auth
    app.get('/auth/google', AuthController.google)

    // Google Auth Callback
    app.get('auth/google/callback', AuthController.googleCallback)
}