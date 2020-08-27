import { createStore, combineReducers } from "redux";
import appRedc from "../redux/app/appReducer";

const rootReducer = combineReducers({ app: appRedc });

const store = createStore(rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
