import { configureStore } from "@reduxjs/toolkit";

// import reducers from slices to be added to store.
import SearchSliceReducer from "@features/search/SearchSlice";
import PostSlice from '@features/post/postSlice'



export const store = configureStore({
    reducer: {
        search: SearchSliceReducer,
        post: PostSlice,
    }
})