import app from "../redux/app/appReducer";

// import { configureStore } from "@reduxjs/toolkit";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ app });

const store = createStore(rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = configureStore({
//   reducer: { app },
// });

export default store;
