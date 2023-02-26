const mongoose = require('mongoose')

const pokeTeamSchema = new mongoose.Schema({
    pokemon_1:{
        type: {},
        required: true
    },
    pokemon_2:{
        type:String,
        required: true
    },
    pokemon_3:{
        type:String,
        required: true
    },
    pokemon_4:{
        type:String,
        required: true
    },
    pokemon_5:{
        type:String,
        required: true
    },
    pokemon_6:{
        type:String,
        required: true
    }
},
{
    collection:'pokemon_teams'
})

module.exports = mongoose.model('PokeTeam', pokeTeamSchema)