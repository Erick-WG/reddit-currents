// fetch detailed post data togerther with it's comments through the permalink.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async (permalink) => {
        // dynamic link when we have a permalink.
        const query = permalink ? `https://www.reddit.com${permalink}/.json` : ``;
        try {
            const response = await fetch(query)
            // handle error.
            if (!response.ok) throw new Error("Failed to get post...", permalink)
            // get the data when the response is ok
            const json = await response.json()
            console.log(json)

            // return the whole data object.
            return json

        } catch (error) {
            console.log(error)
        }
    }
)


const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: {},
        comments: [],
        loading: false,
        error: {
            status: false,
            message: ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state)=>{
            state.comments = []
            state.loading = true
            state.error.status = false
            state.error.message = ''
            state.post = {}
        })
        .addCase(fetchPost.rejected, (state, action)=>{
            state.comments = []
            state.loading = false
            state.error.status = true
            state.error.message = action.error
            state.post = {}
        })
        .addCase(fetchPost.fulfilled, (state, action)=>{
            // extract posts and comments from the data object.
            const post = action.payload[0]?.data?.children[0]?.data
            const comments = action.payload[1]?.data?.children

            // extract desired fields from the post.

            state.loading = false
            state.error.status = false
            state.error.message = ''
            state.post = post
            state.comments = comments
        })
    },
    selectors: {
        selectComments: (state) => state.comments,
        selectPost: (state) => state.post,
        selectPostError: (state) => state.error.status,
        selectPostErrorMessage: (state) => state.error.message,
        selectPostIsLoading: (state) => state.loading
    }
})


export const { selectComments, selectPost, selectPostError, selectPostErrorMessage, selectPostIsLoading } = postSlice.selectors
export default postSlice.reducer