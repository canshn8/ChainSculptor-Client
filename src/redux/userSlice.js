import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import request from '../request';

const storedUser = localStorage.getItem("user");

const initialState = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
  isFetching: false,
  error: false,
  isLoggedIn: storedUser ? true : false, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;

      const user = action.payload;
      if(user) {
        localStorage.getItem("user", JSON.stringify(user));
      }

    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;  
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; 
    },
  },
});




export const login = (userData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await request.request('POST', '/auth/signin', userData);
    console.log(userData);
    
    console.log("Response from API : ",res);
    dispatch(loginSuccess(res.data));  
    localStorage.setItem("user", JSON.stringify(res));
  } catch (err) {
    dispatch(loginFailure());
    console.error("Login failed:", err);
  }
};

export const register = (user) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await request.request('POST', '/auth/signup', user);  
      dispatch(registerSuccess(res.data));
      console.log(res+" : "+res.data);
       
    } catch (err) {
      dispatch(loginFailure()); 
    }
  };
  


export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;