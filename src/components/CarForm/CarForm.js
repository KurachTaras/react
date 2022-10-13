import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {

    const dispatch = useDispatch();

    const {currentCar} = useSelector(state => state.carReducer)

    const {register, handleSubmit, reset, setValue} = useForm({});

    useEffect(()=> {
        if (currentCar) {
            setValue('model', currentCar.model)
            setValue('price', currentCar.price)
            setValue('year', currentCar.year)
        }
    }, [currentCar, setValue]);

    const submit = async (data) => {
        if (currentCar) {
            await dispatch(carActions.updateById({id: currentCar.id, car: data}))
        } else {
            await dispatch(carActions.createCar({car: data}))
        }
        reset()
    };

    return (
       <form onSubmit={handleSubmit(submit)}>
           <input type="text" placeholder={'model'} {...register('model')}/>
           <input type="text" placeholder={'price'} {...register('price')}/>
           <input type="text" placeholder={'year'} {...register('year')}/>
           <button>{currentCar ? 'Update' : 'Save'}</button>
       </form>
    );
};

export {CarForm};