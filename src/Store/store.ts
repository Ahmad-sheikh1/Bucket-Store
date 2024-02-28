import { configureStore } from "@reduxjs/toolkit";
import  AddToBasketSlice  from "./Slices/AddToBasket";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        AddingProducts: AddToBasketSlice,   
    },
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;