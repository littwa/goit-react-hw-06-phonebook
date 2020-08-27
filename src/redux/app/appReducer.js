import { combineReducers } from "redux";
// import { ADD_ITEMS, DEL_ITEMS, FILTER, ITEMS_LOCAL_STOR } from "./appTypes";
import { createReducer } from "@reduxjs/toolkit";
import appAction from "./appAction";

const appFilter = createReducer("", { [appAction.filter]: (state, action) => action.payload });

// const appFilter = (state = "", action) => {
//   switch (action.type) {
//     case FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const appItems = createReducer([], {
  [appAction.addItemsFromLocalStor]: (state, action) => [...state, ...action.payload],
  [appAction.itemsAdd]: (state, action) => [...state, action.payload.items],
  [appAction.itemsDel]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});

// const appItems = (state = [], action) => {
//   switch (action.type) {
//     case ITEMS_LOCAL_STOR:
//       return [...state, ...action.payload];
//     case ADD_ITEMS:
//       return [...state, action.payload.items];
//     case DEL_ITEMS:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

export default combineReducers({ filter: appFilter, items: appItems });
