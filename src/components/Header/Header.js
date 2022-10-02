import {useReducer, useRef} from "react";

const init = (initialValue) => {
    return {dog: initialValue, cat: initialValue}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat': {
            const newCat = {
                id: state.cat?.length,
                name: action.name,
            };
            return {
                cat: [...state.cat, newCat],
            };
        }
        case 'removeCat': {
            const idx = state.cat.findIndex(c => c.id === action.id);
            const cat = Object.assign([], state.cat);
            cat.splice(idx, 1);
            return {
                cat: cat,
            };
        }
        case 'addDog': {
            const newDog = {
                id: state.dog?.length,
                name: action.name,
            };
            return {
                dog: [...state.dog, newDog],
            };
        }
        case 'removeDog': {
            const idx = state.dog.findIndex(d => d.id === action.id);
            const dog = Object.assign([], state.dog);
            dog.splice(idx, 1);
            return {
                dog: dog,
            };
        }
        default:
            return state

    }
};


const Header = () => {
    const [state, dispatch] = useReducer(reducer, [] ,init);
    const cat = useRef();
    const dog = useRef();

    const handleSubmitCat = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addCat',
            name: cat.current.value
        });
        cat.current.value = '';
        console.log(state);
    };

    const handleSubmitDog = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addDog',
            name: dog.current.value
        });
        dog.current.value = '';
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={handleSubmitCat}>
                <input  ref={cat}/>
                <button>
                    save
                </button>
            </form>
            <form onSubmit={handleSubmitDog}>
                <input  ref={dog}/>
                <button>
                    save
                </button>
            </form>
            <ul>
                {state.cat?.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({type:'removeCat', index})}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <ul>
                {state.dog?.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({type:'removeDog', index})}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export  {Header};