import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    'search/fetchPosts',
    async (searchTerm = null) => {

        // try fetching reddit data if searchTerm !== null
        fetch(searchTerm)
        return
    })

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    selectors: {
        selectSearchTerm: (state) => state.searchTerm
    }
})


export const { setSearchTerm } = SearchSlice.actions
export const { selectSearchTerm } = SearchSlice.selectors


export default SearchSlice.reducer