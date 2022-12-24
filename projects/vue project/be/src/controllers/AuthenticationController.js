const User = require('../models/User')
// const AnotherModel = require('../models/TherequiredModel)

module.exports = {
    async register (req, res) {
        try {
            console.log(req.body)
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
            console.log(err.message)
        }
    },
    async login (req, res) {
        try {
          const {email, password} = req.body
          const user = await User.findOne({
            where: {
              email: email
            }
          })
    
          if (!user) {
            return res.status(403).send({
              error: 'The login information was incorrect'
            })
          }
    
          const isPasswordValid = password === user.password
          if (!isPasswordValid) {
            return res.status(403).send({
              error: 'The login information was incorrect'
            })
          }
    
          const userJson = user.toJSON()
          res.send({
            user: userJson
          })
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to log in'
          })
        }
      }
}