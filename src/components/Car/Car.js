import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, model, price, year} = car;

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={css.tools}>
                <button onClick={()=> {
                    dispatch(carActions.deleteById({id}))
                }}>Delete</button>
                <button onClick={()=> {
                    dispatch(carActions.setCurrentCar(car))
                }}>Update</button>
            </div>
        </div>
    );
};

export {Car};