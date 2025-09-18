import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    id: number;
    name: string;
    image: string;
    price: string;
}

type CartItems = CartState[]

const initialState: CartItems = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartState>) => {
            state.push(action.payload);
    },
        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.id !== action.payload);
    },
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer