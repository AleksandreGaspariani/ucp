import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: 'global',
    initialState: { 
        loading: 0,
    },
    reducers: { 
        show: (state) => {
            state.loading = true;
        },
        hide: (state) => {
            state.loading = false;
        }
    }
})

export const { show, hide } = globalSlice.actions;


export default globalSlice.reducer;