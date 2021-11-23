import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Song() {
    // props
    const { id } = useParams();
    // state
    const [ song, setSong ] = useState({})
    // functions
    const getSong = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/songs/${id}`)
            const song = data.payload;
            console.log(song);
            setSong(song)
        } catch(error) {
            console.log(error)
        }
    }
    // call functions
    useEffect(() => {
        getSong()
    }, [])
    // components
    return (
        <div className='main'>
            <h1>Song Page</h1> 
            <div className='song' key={song.id}>
                {song.is_favorite ? <p className='favorited'>★</p> : <p className='unfavorited'>☆</p>}
                <h4 className='song-el'>{song.name}</h4>
                <p className='song-el'>{song.artist}</p>
                <p className='song-el'>{song.time}</p>
            </div>

            <Link to='/songs'>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Song