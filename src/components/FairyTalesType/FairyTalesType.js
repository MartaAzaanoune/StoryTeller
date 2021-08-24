import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Audio from "../audio/Audio";
import {db} from '../../App';
import React from 'react';


export default function FairyTalesType() {
    let {type} = useParams();
    const [audios, setAudios] = useState([]);


    useEffect(() => {
        setAudios([])
        const getFairyTales = async () => {
            const fairyTales = await db.collection(type).get()
            fairyTales.docs.forEach(fairyTale => {
                console.log(fairyTale.data());
                setAudios(prev => [...prev, fairyTale.data()])
            })
        }
        getFairyTales().then(r => {
            console.log(r);
        });
    }, [type]);
    useEffect(() => {
        console.log('cleaning')
        return () => {
            console.log("cleaned up");
        };
    }, []);
    /* function useAsync(asyncFn, onSuccess) {
         useEffect(() => {
             let isActive = true;
             asyncFn().then(data => {
                 if (isActive) onSuccess(data);
             });
             return () => { isActive = false };
         }, [asyncFn, onSuccess]);
     }
     useAsync();*/


    return (
        <>
            <div className="decor">
                <h3>{type}</h3>
                {audios.length
                    ? audios.map(({title, time, level, description, audio}) => <Audio time={time} title={title}
                                                                                      description={description}
                                                                                      level={level} audio={audio}/>)
                    : <p>Loading...</p>}
            </div>


        </>
    );
}