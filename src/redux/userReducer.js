import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: true,
        loggingStage: 2, // 0 - login form on '/' route, 1 - redirect to route '/login' , 2 - in
        token: ''
    }, 
    reducers: {
        login: (state, action) => {
            // state.loggedIn = true;
            state.token = action.payload;
            // state.loggingStage = 2;
        },
        logout: (state) => {
            // state.loggedIn = false;
            state.token = '';
            // state.loggingStage = 0;
        },
        stage: (state, action) => {
            state.loggingStage = action.payload;
        }
    }
});

export const { login, logout, stage } = loggedSlice.actions

export default loggedSlice.reducer;