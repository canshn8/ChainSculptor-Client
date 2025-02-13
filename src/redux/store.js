// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import jobReducer from "./jobSlice";
import userReducer  from "./userSlice";


const store = configureStore({
  reducer: {
    job: jobReducer,
    user: userReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;