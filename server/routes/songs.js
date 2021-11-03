const express = require('express');
const router = express.Router();
const { getAllSongs, getSongById } = require("../queries/songs");

// get all songs in database
router.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs); 
})

// get single song by id
router.get('/:id', async (req, res) => {
    const song = await getSongById(req.params.id);
    res.json(song); 
})



module.exports = router