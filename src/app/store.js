import { configureStore } from "@reduxjs/toolkit";

// import reducers from slices to be added to store.
import SearchSliceReducer from "../features/search/SearchSlice";



export const store = configureStore({
    reducer: {
        search: SearchSliceReducer
    }
})