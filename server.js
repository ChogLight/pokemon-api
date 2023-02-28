require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.listen(3000, () => console.log('Connected to server'))
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to database'))


app.use(cors())
app.use(express.json())
const pokemonTeamRouter = require('./routes/pokemonTeam.js')


app.use('/poketeam', pokemonTeamRouter)
