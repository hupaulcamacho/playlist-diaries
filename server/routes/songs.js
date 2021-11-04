const express = require('express');
const router = express.Router();
const { getAllSongs, getSongById, createNewSong, deleteSongById } = require("../queries/songs");

// get all songs in database
router.get('/', async (req, res) => {
    try {
        const allSongs = await getAllSongs();
        res.json({
            payload: allSongs,
            message: 'songs retrieved',
            err: false
        })    
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'songs not retrieved',
            err: true
        }) 
    }
})

// get single song by id
router.get('/:id', async (req, res) => {
    try {
        const song = await getSongById(req.params.id);
        res.json({
            payload: song,
            message: 'song retrieved',
            err: false
        })    
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'song not retrieved',
            err: true
        }) 
    }
})

// create new song
router.post('/', async (req, res) => {
    const songInfo = {
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        time: req.body.time,
        is_favorite: req.body.is_favorite
    }

    try {
        let newSong = await createNewSong(songInfo);
        res.json({
            payload: newSong,
            message: 'new song created',
            error: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'An error has occured.',
            error: true
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let response = await deleteSongById(req.params.id)
        res.json({
            message: 'song deleted.'
        })
    } catch (error) {
        res.status(500).json({
            message: 'an error has occured'
        })
    }
})

module.exports = router