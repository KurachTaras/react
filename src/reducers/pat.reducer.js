const init = {
    cat: [],
    dog: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat': {
            const newCat = {
                id: state.cat?.length,
                name: action.name,
            };
            return {
                ...state,
                cat: [...state.cat, newCat],
            };
        }
        case 'removeCat': {
            const idx = state.cat.findIndex(c => c.id === action.id);
            const cat = Object.assign([], state.cat);
            cat.splice(idx, 1);
            return {
                ...state,
                cat: cat,
            };
        }
        case 'addDog': {
            const newDog = {
                id: state.dog?.length,
                name: action.name,
            };
            return {
                ...state,
                dog: [...state.dog, newDog],
            };
        }
        case 'removeDog': {
            const idx = state.dog.findIndex(d => d.id === action.id);
            const dog = Object.assign([], state.dog);
            dog.splice(idx, 1);
            return {
                ...state,
                dog: dog,
            };
        }
        default:
            return state

    }
};

export {
    reducer,
    init
}