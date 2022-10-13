import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    currentCar: null,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSplice/submitCar',
    async ({car}, {rejectWithValue, dispatch, getState})=> {
        try {
            const {data} = await carService.create(car);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectedWithValue}) => {
        try {
            await carService.deleteById(id);
            return id
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue})=> {
        try {
            const {data} = await carService.updateById(id, car)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentCar: (state, action) => {
            state.currentCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload)
                state.cars.splice(index, 1)
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const car = state.cars.find(car => car.id === action.payload.id);
                Object.assign(car, action.payload)
                state.currentCar = null;
            })
},)

const {reducer: carReducer, actions:{setCurrentCar}} = carSlice;

const carActions = {
    getAll,
    setCurrentCar,
    createCar,
    deleteById,
    updateById
}

export {
    carReducer,
    carActions
}