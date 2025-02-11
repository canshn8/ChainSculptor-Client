// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
// import projectReducer from "./projectSlice";
// import userReducer  from "./userSlice";


const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;