const express = require('express');
const router = express.Router();
const { getAllSongs } = require("../queries/songs");

router.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
})

module.exports = router