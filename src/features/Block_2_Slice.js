import {createSlice} from "@reduxjs/toolkit";

const Block_2_Slice = createSlice({
    name: 'block_2',
    initialState: {
        todo: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload);
        },
        changeComplete: (state, action) => {
            let search = state.todo.find(i => i.id === action.payload);
            search.complete = !search.complete;
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter(i => i.id !== action.payload)
        },
    }
});

export const { addTodo, changeComplete, removeTodo } = Block_2_Slice.actions;
export default Block_2_Slice.reducer;