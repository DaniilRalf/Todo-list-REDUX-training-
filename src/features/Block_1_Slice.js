import {createSlice} from "@reduxjs/toolkit";

const Block_1_Slice = createSlice({
    name: 'block_1',
    initialState: {
        firstName: '',
        lastName: '',
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
    }
})

export const { setFirstName, setLastName } = Block_1_Slice.actions;
export default Block_1_Slice.reducer;