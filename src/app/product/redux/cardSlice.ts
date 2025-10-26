import { createSlice } from "@reduxjs/toolkit";
interface Product {
    id: number;
    title: string;
    price: number;
    image?: string;
    quantity: number;
}

const initialState: Product[] = [];
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 }
                state.push(newItem);
            }
        },
        deleteCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
        cleacard: () => {
            return [];
        },
        incrementQuantity: (state, action) => {
            const number = state.find((Product) => Product.id === action.payload)
            if (number) {
                number.quantity += 1
            }

        },
        decrementQuantity: (state, action) => {
            const number = state.find((Product) => Product.id === action.payload)
            if (number && number.quantity > 1) {
                number.quantity -= 1

            } else {
                return state.filter((Product) => Product.id !== action.payload)
            }
        },
        setQuantity: (state, action) => {
            const item = state.find(p => p.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity > 0 ? action.payload.quantity : 1;
            }
        },

    }
});

export const { addToCart, deleteCart, cleacard, incrementQuantity, decrementQuantity, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
