import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'block_3/getPosts',
    async function(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
)

const Block_3_Slice = createSlice({
    name: 'block_3',
    initialState: {
        posts: [],
    },
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            console.log(action.payload)
        }
    },
})

export default Block_3_Slice.reducer;