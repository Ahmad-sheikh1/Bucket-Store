import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    url: string,
    title: string,
    Price: number,
    desc: string
}

type Initiastate = {
    products: Product[]
}

const initialState: Initiastate = {
    products: []
};

export const AddToBasketSlice = createSlice({
    initialState: initialState,
    name: "AddToBasket",
    reducers: {
        AddToBasket: (state, action: PayloadAction<Product[]>) => {
            state.products.push(...action.payload);
        },
        DeleteFromBasket: (state, action: PayloadAction<number>) => {
            state.products.splice(action.payload, 1);
        }
    }
});

export const { AddToBasket , DeleteFromBasket } = AddToBasketSlice.actions;
export default AddToBasketSlice.reducer;
