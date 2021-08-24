import React, { useState, useEffect } from 'react'
import Audio from './components/audio/Audio';

export default function AudioList() {
    const [audios, setAudios] = useState([])
    /*useEffect(() => {
        const API = "http://localhost:3000";
         fetch(`${API}/audios/1`, {
           method: "GET",
           body: JSON.stringify({}),
           headers: {
             "Content-Type": "application/json"
           }
         })
           .then(response => response.json())
           .then(data => {
             console.log(data);
           })
           .catch(error => {
            console.log(error);
           });
    }, [])*/
    return (
        <div>
            {audios.map(audio => <Audio name={audio.name} />)}
        </div>
    )
}