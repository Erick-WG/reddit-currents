import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    "search/fetchPosts",
    async (subreddit = "popular") => {
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
  
        const json = await response.json();
  
        const posts = json.data.children
  
        return posts
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: null,
        posts: [],
        postsPending: false,
        postsFetchError: false,
        errorFetching: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = null
        }
    },
    selectors: {
        selectSearchTerm: (state) => state.searchTerm,
        selectPosts: (state) => state.posts,
        selectErrorFetching: (state) => state.errorFetching,
        selectFetchError: (state) => state.postsFetchError,
        selectFetchPending: (state) => state.postsPending
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.postsPending = true
                state.postsFetchError = false
            })
            .addCase(fetchPosts.fulfilled, (state, action) =>{
                state.posts = action.payload
                state.postsPending = false
                state.postsFetchError = false
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.postsFetchError = true
                state.errorFetching = action.payload
            })
    }
})


export const { setSearchTerm, clearSearchTerm } = SearchSlice.actions
export const { selectSearchTerm, selectPosts, selectErrorFetching, selectFetchError, selectFetchPending } = SearchSlice.selectors


export default SearchSlice.reducer