import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        updateCurrentLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
});

export const { updateCurrentLanguage } = configSlice.actions;

export default configSlice.reducer;