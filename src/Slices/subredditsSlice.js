import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formatResponseContent from "../HelperFunctions/formatResponseContent";
import formatPopular from "../HelperFunctions/formatPopular";

const fetchData = createAsyncThunk('subreddits/fetchData', async (url)=>{
    const response = await fetch(url);
    const data = await response.json()
    return data;
});

const fetchPopular = createAsyncThunk('subreddits/fetchPopular', async ()=>{
    const response = await fetch('https://www.reddit.com/subreddits/popular.json?limit=8');
    const data = await response.json();
    return data;
})

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        home: [],
        popular:{},
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
        [fetchData.fulfilled]: async (state, action) =>{
            state.loading = false;
            state.error = false;
            if(action.meta.arg === 'https://www.reddit.com/.json'){
                state.home = await formatResponseContent(action.payload);
            }else{
                for(let sub in state.popular){
                    if(sub.fetchURL === action.meta.arg){
                        state.popular[sub]['content'] = await formatResponseContent(action.payload)
                    }
                }
            }
        },
        [fetchData.rejected]: (state, action) =>{
            state.loading = false;
            state.error = true;
        }
    }
});

export const selectHome = (state) => state.home;
export const selectPopular = (state) => state.popular;
export const isLoading = (state) => state.loading;
export const isError = state => state.errot;

export default subredditsSlice.reducer;