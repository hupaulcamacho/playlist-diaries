import { useState, useEffect } from 'react'
import axios from 'axios'
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
                    <div className='song'>
                        <h4>{songs[i].name}</h4>
                    </div>
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
