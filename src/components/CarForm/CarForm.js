import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, toggle, button, car}) => {
    const {id, model, year, price} = car
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all',
    });

    const submit = async (car) => {
        if (id && button) {
            const {qwe} = await carService.updateById(id, car)
            setCars(cars => [...cars])
            toggle()
            reset()
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data])
        }
    }

    useEffect(() => {
        if (button) {
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        } else {
            setValue('model', 'Audi')
            setValue('price', '100000')
            setValue('year', '2020')
        }
    }, [id, button])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={''} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})} />
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{button?'Update':'Save'}</button>
        </form>
    );
};

export default CarForm;