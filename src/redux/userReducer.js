import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        loggingStage: 0, // 0 - login form on '/' route, 1 - redirect to route '/login' , 2 - in , 3 - register form 
        token: '',
        user: {
            'id' : '',
            'name': ''
        }
    }, 
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.token = action.payload;
            state.loggingStage = 2;
        },
        register: (state, action) => {
            
        },
        logout: (state) => {
            state.loggedIn = false;
            state.token = '';
            state.loggingStage = 0;
            localStorage.clear();
        },
        stage: (state, action) => {
            state.loggingStage = action.payload;
        },
        user: (state,action) => {
            state.user.id = action.payload['id'];
            state.user.name = action.payload['name'];
        }
    }
});

export const { login, logout, stage, register, user } = loggedSlice.actions

export default loggedSlice.reducer;