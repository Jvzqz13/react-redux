// from redux
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state, action) => {
            state.value += Number(action.payload);
        },
        decrement: (state, action) => {
            state.value -= Number(action.payload);
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});
//actions => exports to Counter.js
export const { increment, decrement, reset  } = counterSlice.actions;

// state selectors => exports to Counter.js
export const selectCount = (state) =>state.counter.value;


// export default the reducer
export default counterSlice.reducer;