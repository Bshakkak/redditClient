import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {formatResponseContent, fetchAuthorIcon } from '../HelperFunctions/formatResponseContent'
import formatPopular from "../HelperFunctions/formatPopular";


export const fetchData = createAsyncThunk('subreddits/fetchData', async (url)=>{
    const response = await fetch(url);
    let data = await response.json();
    data = formatResponseContent(data);
    let profile = await fetchAuthorIcon(data.profileName);
    data.profile = profile;
    return data;
});

export const fetchPopular = createAsyncThunk('subreddits/fetchPopular', async ()=>{
    const response = await fetch('https://www.reddit.com/subreddits/popular.json?limit=8');
    const data = await response.json();
    return data;
})

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        content: [],
        popular: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [fetchPopular.pending]: (state, action) =>{
            state.loading = true;
            state.error = false;
        },
        [fetchPopular.fulfilled]: (state, action)=>{
            state.loading = false;
            state.error = false;
            state.popular = formatPopular(action.payload)
        },
        [fetchData.pending]: (state, action) =>{
            state.loading = true;
            state.error = false;
        },
        [fetchData.fulfilled]: (state, action) =>{
            state.content = action.payload;
            state.loading = false;
            state.error = false;
        },
        [fetchData.rejected]: (state, action) =>{
            state.loading = false;
            state.error = true;
        }
    }
});

export const selectContent = (state) => state.subreddits.content;
export const selectPopular = (state) => state.subreddits.popular;
export const isLoading = (state) => state.subreddits.loading;
export const isError = (state) => state.subreddits.error;

export default subredditsSlice.reducer;