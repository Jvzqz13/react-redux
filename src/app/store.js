// from redux
import { configureStore } from '@reduxjs/toolkit';

// from CounterSlice.js
import counterReducer from '../features/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});