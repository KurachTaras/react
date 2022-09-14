import './characters.css'

import {useState} from "react";
import Character from "./Character";

export default function Characters () {
    let [characters, setCharacter] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacter(value.results);
            console.log(value.results);
        });

    return (<div className = "RickAndMorty">
        {characters.map((character, index) => (<Character item={character} key={index}/>))}
    </div>)

}