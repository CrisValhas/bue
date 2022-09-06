import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "rootReducer",
    initialState: {
        lang: "ESP",
    },
    reducers: {
        setLanguage(state, action) {
            state.lang = action.payload;
        },
    },
});

export const { setLanguage } = slice.actions;

export default slice.reducer;