require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to database'))

var corsOptions = {
    origin: 'http://localhost:5173/pokedex',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.json())
const pokemonTeamRouter = require('./routes/pokemonTeam.js')


app.use('/poketeam', cors(corsOptions), pokemonTeamRouter)
app.listen(3000, () => console.log('Connected to server'))
