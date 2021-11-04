const db = require('../db/server.js');

const getAllSongs = async () => {
  const allSongs = await db.any("SELECT * FROM songs");
  return allSongs; 
}

const getSongById = async (id) => {
  const song = await db.oneOrNone("SELECT * FROM songs WHERE id = $1", [ id ]);
  return song
}

const createNewSong = async (song) => {
  const insertQuery = `INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *`
  
  const newSong = await db.one(insertQuery, [song.name, song.artist, song.album, song.time, song.is_favorite]);
  
  return newSong
}

module.exports = { 
  getAllSongs, 
  getSongById,
  createNewSong 
};