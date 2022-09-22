import css from './Car.module.css'

const Car = ({car, deleteCar, toggle, getCar}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div className={css.Car}>
                <div>
                    <div>id: {id}</div>
                    <div>model: {model}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                </div>
                <div>
                    <button onClick={() => {
                        getCar(id)
                        toggle()
                    }}>Update</button>
                    <button onClick={() => deleteCar(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export {Car};