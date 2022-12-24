const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJson())
        } catch (err) {
            res.status(400).send(err)
            console.log(err.message)
        }
    }
}