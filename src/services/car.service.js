import {carUrls} from "../configs";
import {axiosCarService} from "./axios.car.service";


const carService = {
    getAll: ()=> axiosCarService.get(carUrls.cars),
    create: (car)=> axiosCarService.post(carUrls.cars, car),
    getById: (id)=> axiosCarService.get(`${carUrls.cars}/${id}`),
    updateById: (id, car)=> axiosCarService.put(`${carUrls.cars}/${id}`, car),
    deleteById: (id)=> axiosCarService.delete(`${carUrls.cars}/${id}`),
}

export {
    carService,
}