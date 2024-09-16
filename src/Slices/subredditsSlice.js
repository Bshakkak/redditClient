import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {formatResponseContent, fetchAuthorIcon, fetchComments } from '../HelperFunctions/formatResponseContent'
import formatPopular from "../HelperFunctions/formatPopular";
import { homeIcon } from "../Icons";

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

export const fetchCurrentComment = createAsyncThunk('subreddits/fetchCurrentComment', async ({subreddit, id, title})=>{
    return await fetchComments(subreddit, id, title);
})

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        content: [],
        popular: [{
            id: 'home-reddit',
            name: 'Feed',
            icon: homeIcon,
            color: 'transparent',
            fetchURL: "https://www.reddit.com/.json?limit=10"
        }],
        comments: [],
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
            state.popular = [{
                id: 'home-reddit',
                name: 'Feed',
                icon: homeIcon,
                color: 'transparent',
                fetchURL: "https://www.reddit.com/.json?limit=10"
            }, ...formatPopular(action.payload)];
        },
        [fetchPopular.rejected]: (state, action) =>{
            state.loading = false;
            state.error = true;
        },
        [fetchData.pending]: (state, action) =>{
            state.loading = true;
            state.error = false;
        },
        [fetchData.fulfilled]: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.content = action.payload;
        },
        [fetchData.rejected]: (state, action) =>{
            state.loading = false;
            state.error = true;
        },
        [fetchCurrentComment.pending]: (state, action) =>{
            // state.loading = true;
            // state.error = false;
        },
        [fetchCurrentComment.fulfilled]: (state, action) =>{
            // state.loading = false;
            // state.error = false;
            state.comments = Array.from(new Set([...state.comments, ...action.payload]));
        },
        [fetchCurrentComment.rejected]: (state, action) =>{
            // state.loading = false;
            // state.error = true;
        }
    }
});

export const selectContent = (state) => state.subreddits.content;
export const selectPopular = (state) => state.subreddits.popular;
export const selectComments = (state) => state.subreddits.comments;
export const isLoading = (state) => state.subreddits.loading;
export const isError = (state) => state.subreddits.error;

export default subredditsSlice.reducer;