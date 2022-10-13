import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected,(state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
});

const {reducer: postReducer, actions: {setCurrentPost, deleteById}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost,
    deleteById
}

export {
    postReducer,
    postActions
}