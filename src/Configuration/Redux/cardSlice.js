import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    quantity: 0,
};

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.quantity += 1; // Increment the quantity
        },
    },
});

export const { addToCart } = cardSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectCartQuantity = (state) => state.cart.quantity;

export default cardSlice.reducer;