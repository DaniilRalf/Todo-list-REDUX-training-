import {configureStore} from "@reduxjs/toolkit";
import Block_1_Slice from "../features/Block_1_Slice";
import Block_2_Slice from "../features/Block_2_Slice";
import Block_3_Slice from "../features/Block_3_Slice";

export const store = configureStore({
    reducer: {
        block_1: Block_1_Slice,
        block_2: Block_2_Slice,
        block_3: Block_3_Slice,
    },
})