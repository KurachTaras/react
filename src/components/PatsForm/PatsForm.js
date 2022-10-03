import React, {useReducer, useRef} from 'react';
import {init, reducer} from "../../reducers";

import './PatsForm.css'

const PatsForm = ({item}) => {
    const [state, dispatch] = useReducer(reducer, init);
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
            <div className={'form'}>
                <form onSubmit={handleSubmitCat}>
                    <input type="text" ref={cat} />
                    <button>
                        saveCat
                    </button>
                </form>
                <form onSubmit={handleSubmitDog}>
                    <input  type="text" ref={dog} />
                    <button>
                        saveDog
                    </button>
                </form>
            </div>

            <div className={'pats'}>
                <div className={'cats'}>
                    <div> cats
                        {state.cat?.map((item, index) => (
                            <div key={index} className={'cat_card'}>
                                <div className={'cat_name'}>
                                    {item.name}
                                </div>
                                <button className={'cat_button'} onClick={() => dispatch({type:'removeCat', id: cat.id})}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={'dogs'}>
                    <div> dogs
                        {state.dog?.map((item, index) => (
                            <div key={index} className={'dog_card'}>
                                <div className={'dog_name'}>{item.name}</div>
                                <button className={'dog_button'} onClick={() => dispatch({type:'removeDog', id: dog.id})}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export {PatsForm};