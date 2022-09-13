import { createSlice } from "@reduxjs/toolkit";

import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

export const slice = createSlice({
    name: "rootReducer",
    initialState: {
        lang: ESP,
    },
    reducers: {
        setLanguage(state, action) {
            if (action.payload === "ESP") state.lang = ESP;
            if (action.payload === "ENG") state.lang = ENG;
        },
    },
});

export const { setLanguage } = slice.actions;

export default slice.reducer;