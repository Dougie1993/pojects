const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./database/db')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes/routes')(app)

sequelize.sync({ force: true})
    .then(() => {
        console.log('db is ready')
    })

app.listen(config.port, () => {
    console.log('App is running')
})