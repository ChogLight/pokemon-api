require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to database'))


app.use(express.json())
app.use(cors())
const pokemonTeamRouter = require('./routes/pokemonTeam.js')


app.use('/poketeam', pokemonTeamRouter)
app.listen(3000, () => console.log('Connected to server'))
