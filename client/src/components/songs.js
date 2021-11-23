import { useState, useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

function Songs(){
    const [ songs, setSongs ] = useState([]);
    
    // functions
    const getSongs = async () => {
        try {
            const { data } = await axios.get('http://localhost:3001/songs/')
            let songs = data.payload
            console.log(songs)
            let songComponents = []
            for (let i = 0; i < songs.length; i++) {
                songComponents.push(
                    <Link className='song-link' to={`/song/${songs[i].id}`}>
                        <div className='song' key={songs[i].id}>
                            {songs[i].is_favorite ? <p className='favorited'>★</p> : <p className='unfavorited'>☆</p>}
                            <h4 className='song-el'>{songs[i].name}</h4>
                            <p className='song-el'>{songs[i].artist}</p>
                            <p className='song-el'>{songs[i].time}</p>
                        </div>
                    </Link>
                    
                )
            }
            setSongs(songComponents)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSongs()
    }, [])

    return (
        <div className='main'>
            <h1>Songs</h1> 
            {songs}
        </div>
    )

}

export default Songs;
