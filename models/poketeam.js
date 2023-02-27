const mongoose = require('mongoose')

const pokeTeamSchema = new mongoose.Schema({
    team_name : {
        type: String,
        required: true
    },
    pokemon_1:{
        type: {},
        required: true
    },
    pokemon_2:{
        type:{},
        required: true
    },
    pokemon_3:{
        type:{},
        required: true
    },
    pokemon_4:{
        type:{},
        required: true
    },
    pokemon_5:{
        type:{},
        required: true
    },
    pokemon_6:{
        type:{},
        required: true
    }
},
{
    collection:'pokemon_teams'
})

module.exports = mongoose.model('PokeTeam', pokeTeamSchema)