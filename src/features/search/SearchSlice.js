import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    "search/fetchPosts",
    async (subreddit = "popular", thunkAPI) => {
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
  
        const json = await response.json();
  
        const posts = json.data.children
  
        return posts
      } catch (error) {
        // const rejection = |>
        thunkAPI.rejectWithValue({
            error: true,
            message: error.message
        });
        // console.log(rejection)
      }
    }
  );

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: null,
        posts: [],
        postsPending: true,
        postsFetchError: {
            error: false,
            message: ''
        }
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
        selectFetchError: (state) => state.postsFetchError,
        selectFetchPending: (state) => state.postsPending
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.postsPending = true;
                state.postsFetchError.error = false;
                state.postsFetchError.message = '';
            })
            .addCase(fetchPosts.fulfilled, (state, action) =>{
                // addressing offline states (temporary solution -> works perfectly atm :)
                if(action.payload == undefined) {
                    state.postsFetchError.error = true;
                    state.postsFetchError.message = 'Failed to fetch posts, check your internet connection...';
                    state.postsPending = false;
                    return
                }
                state.posts = action.payload
                state.postsPending = false;
                state.postsFetchError.error = false;
                state.postsFetchError.message = '';
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.postsFetchError.error = action.payload.error;
                state.postsFetchError.message = action.payload.message;
            })
    }
})


export const { setSearchTerm, clearSearchTerm } = SearchSlice.actions
export const { selectSearchTerm, selectPosts, selectFetchError, selectFetchPending } = SearchSlice.selectors


export default SearchSlice.reducer