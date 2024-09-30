import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../Redux/cardSlice';

const store = configureStore({
    reducer: {
        cart: cardReducer,
    },
});

export default store;