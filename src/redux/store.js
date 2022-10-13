import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer, carReducer, postReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    carReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}