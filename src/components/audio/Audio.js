import React from 'react';
import './audio.scss';


export default function Audio({title, time, description, level, audio}) {

    return (
        <div>
            <h1 className="audio_element">{title}: <span>{description}</span></h1>
            <p className="audio_element">Przedzial wiekowy: {level}</p>
            <p className="audio_element">Czas trwania: {time}</p>

            <audio controls>
                <source src={audio} type="audio/x-m4a"/>
            </audio>

        </div>
    )
}
