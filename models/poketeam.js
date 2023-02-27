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
    },
    pokemon_3:{
        type:{},
    },
    pokemon_4:{
        type:{},
    },
    pokemon_5:{
        type:{},
    },
    pokemon_6:{
        type:{},
    }
},
{
    collection:'pokemon_teams'
})

module.exports = mongoose.model('PokeTeam', pokeTeamSchema)