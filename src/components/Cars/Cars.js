import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars, error, loading} = useSelector(state => state.carReducer)

    useEffect(()=> {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div>
            {loading&&<h1>Loading...............</h1>}
            {error&&<h1>Error</h1>}
            {cars.map(car => <Car car={car} key={car.id} />)}
        </div>
    );
};

export {Cars};