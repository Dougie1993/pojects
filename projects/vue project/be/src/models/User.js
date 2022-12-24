const { Model,DataTypes} = require('sequelize')
const sequelize = require('../database/db')

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName:'user',
    timestamps: false
})

module.exports = User