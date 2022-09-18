import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

const getFlightNumber = () => {
    return axiosInstance.get()
}

export {getFlightNumber}
