import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {formatResponseContent, fetchAuthorIcon, fetchComments } from '../HelperFunctions/formatResponseContent'
import formatPopular from "../HelperFunctions/formatPopular";
import { homeIcon } from "../Icons";

export const fetchData = createAsyncThunk('subreddits/fetchData', async (url)=>{
    const response = await fetch(url);
    if(response.ok){
    let data = await response.json();
    data = formatResponseContent(data);
    let profile = await fetchAuthorIcon(data.profileName);
    data.profile = profile;
    return data;}
    else{
        return [];
    }
});

export const fetchPopular = createAsyncThunk('subreddits/fetchPopular', async ()=>{
    const response = await fetch('https://www.reddit.com/subreddits/popular.json?limit=7');
    if(response.ok){
    const data = await response.json();
    return data;}
    else{
        return [];
    }
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
        contentBackup: [],
        popularBackup: [],
        loading: false,
        error: false,
        loadingComment: false
    },
    reducers: {
        filterPosts: (state, action) =>{
            state.content = [...state.contentBackup];
            state.content = state.content.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
    extraReducers: {
        [fetchPopular.pending]: (state, action) =>{
            state.loading = true;
            state.error = false;
        },
        [fetchPopular.fulfilled]: (state, action)=>{
            state.loading = false;
            state.error = false;
            if(action.payload.length > 0) {
                state.popularBackup = [{
                id: 'home-reddit',
                name: 'Feed',
                icon: homeIcon,
                color: 'transparent',
                fetchURL: "https://www.reddit.com/.json?limit=10"
            }, ...formatPopular(action.payload)];
            }
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
            state.popular = state.popularBackup
        },
        [fetchData.pending]: (state, action) =>{
            state.loading = true;
            state.error = false;
        },
        [fetchData.fulfilled]: (state, action) =>{
            state.loading = false;
            state.error = false;
            if(action.payload.length > 0) {
                state.contentBackup = action.payload;
            }
            state.content = action.payload;
        },
        [fetchData.rejected]: (state, action) =>{
            state.loading = false;
            state.error = true;
            state.content = state.contentBackup;
        },
        [fetchCurrentComment.pending]: (state, action) =>{
            state.loadingComment = true;
            // state.error = false;
        },
        [fetchCurrentComment.fulfilled]: (state, action) =>{
            state.loadingComment = false;
            // state.error = false;
            state.comments = Array.from(new Set([...action.payload]));
        },
        [fetchCurrentComment.rejected]: (state, action) =>{
            state.loadingComment = false;
            // state.error = true;
        }
    }
});

export const selectContent = (state) => state.subreddits.content;
export const selectPopular = (state) => state.subreddits.popular;
export const selectComments = (state) => state.subreddits.comments;
export const isLoading = (state) => state.subreddits.loading;
export const isError = (state) => state.subreddits.error;
export const isLoadingComment = (state) => state.subreddits.loadingComment;
export const {filterPosts} = subredditsSlice.actions;

export default subredditsSlice.reducer;