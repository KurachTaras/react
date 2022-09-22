import React, {useEffect, useState} from 'react';
import CarForm from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});
    const [button, setButton] = useState(false);

    useEffect(() => {
        carService.getAll().then(({data})=> setCars(data))
    }, [cars])

    const toggle = () => {
        setButton(!button)
    }

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setCars(cars => {
            const indexCar = cars.findIndex(value => value.id === id)
            cars.splice(indexCar, 1)
            return [...cars]
        })
    }

    const getCar = (id) => {
        carService.getById(id).then(value => setCar(value.data))
    }

    return (
        <div className={"wrap"}>
            <div className={"form"}>
                <CarForm setCars={setCars} car={car} toggle={toggle} button={button}/>
            </div>
            <hr/>
            <div className={"Cars"}>
                {cars.map(car => <Car key={car.id} car={car} setCars={setCars} deleteCar={deleteCar} getCar={getCar} toggle={toggle} />)}
            </div>
        </div>
    );
};

export  {Cars};