import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: 'global',
    initialState: { 
        loading: false,
    },
    reducers: { 
        loading: (state) => {
            state.loading = !state.loading;
        }
    }
})

export const { } = globalSlice.actions;


export default globalSlice.reducer;