import {useReducer} from "react";

import {useState} from "react";

const initialValue = (initialValue) => {
    return {addCat: [], addDog: []}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, addCat: action.payload};
        case 'addDog':
            return {...state, addDog: action.payload};
    }
    return {...state}
}

const Header = () => {
    const [state, dispatch] = useReducer(reducer,  initialValue);
    const [cat, setCat] = useState([]);
    const [dog, setDog] = useState([]);

    const changeCat = event => {
        setCat(event.target.value)
}

    const changeDog = event => {
        setDog(event.target.value)
}


    return (
        <div>
            <input type="text" value={cat} onChange={changeCat} />
            <button onClick={() => dispatch({type: 'addCat', payload:cat})}>Save</button>
            <input type="text" value={dog} onChange={changeDog} />
            <button onClick={() => dispatch({type: 'addDog', payload:dog})}>Save</button>

            <h2>cat: {state.addCat}</h2>
            <h2>dog: {state.addDog}</h2>

            <div>
                 {/*Somehow use map????*/}
            </div>

        </div>
    );
};

export  {Header};