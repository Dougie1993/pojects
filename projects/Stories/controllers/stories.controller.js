// Login page
exports.login = (req, res) => {
    res.render('login', {
        layout: 'login'
    })
}

// Dashboard Page
exports.dashboard = (req, res) => {
    res.render('Dashboard')
}