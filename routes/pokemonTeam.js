const express = require('express')
const router = express.Router()
const PokeTeam = require('../models/poketeam.js')
//Getting Pokemon Teams
router.get('/', async (req, res) => {
    try{
        const poketeams = await PokeTeam.find()
        res.json(poketeams)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

//Getting Pokemon Team
router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        const pokeTeam = await PokeTeam.findById(id)
        res.json(pokeTeam)
        
    } catch (error) {
        res.status(401).json({message: error.message})
    }
})
//Creating Pokemon Team
router.post('/', async (req, res) => {

    res.set('Access-Control-Allow-Origin', '*')
    const pokemonTeam = new PokeTeam({
        pokemon_1:req.body.pokemon_1,
        pokemon_2:req.body.pokemon_2,
        pokemon_3:req.body.pokemon_3,
        pokemon_4:req.body.pokemon_4,
        pokemon_5:req.body.pokemon_5,
        pokemon_6:req.body.pokemon_6
    })

    try {
        const newPokemonTeam = await pokemonTeam.save()
        res.status(201).json(newPokemonTeam)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
})
//Updating Pokemon Team
router.patch('/:id', (req, res) => {
    let id = req.params.id
})
//Deleting Pokemon Team
router.delete('/:id', (req, res) => {
    let id = req.params.id
})

module.exports = router