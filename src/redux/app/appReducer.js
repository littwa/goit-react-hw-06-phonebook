import { combineReducers } from "redux";
import { ADD_ITEMS, DEL_ITEMS, FILTER, ITEMS_LOCAL_STOR } from "./appTypes";

const appFilter = (state = "", action) => {
  switch (action.type) {
    case FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

const appItems = (state = [], action) => {
  switch (action.type) {
    case ITEMS_LOCAL_STOR:
      return [...state, ...action.payload.arrItems];
    case ADD_ITEMS:
      return [...state, action.payload.items];
    case DEL_ITEMS:
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({ filter: appFilter, items: appItems });
