import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        gptMovies: null
    },
    reducers: {
        togglrGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.gptMovies = movieResults;
            state.movieNames = movieNames;
        }
    }
});

export const { togglrGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;