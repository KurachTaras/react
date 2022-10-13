import axios from "axios";

import {baseURL} from "../configs";

const axiosCarService = axios.create({baseURL});

export {
    axiosCarService
}
