import { v4 as uuidv4 } from "uuid";
import { ADD_ITEMS, DEL_ITEMS, FILTER, ITEMS_LOCAL_STOR } from "./appTypes";
import { createAction } from "@reduxjs/toolkit";

const addItemsFromLocalStor = createAction(ITEMS_LOCAL_STOR);

// const addItemsFromLocalStor = (arrItems) => ({
//   type: ITEMS_LOCAL_STOR,
//   payload: {
//     arrItems,
//   },
// });

const itemsAdd = createAction(ADD_ITEMS, (name, number) => ({
  payload: { items: { id: uuidv4(), name, number } },
}));

// const itemsAdd = (name, number) => ({
//   type: ADD_ITEMS,
//   payload: { items: { id: uuidv4(), name, number } },
// });

const itemsDel = createAction(DEL_ITEMS);
// const itemsDel = (id) => {
//   return {
//     type: DEL_ITEMS,
//     payload: {
//       id,
//     },
//   };
// };

const filter = createAction(FILTER);

// const filter = (filter) => {
//   return {
//     type: FILTER,
//     payload: {
//       filter,
//     },
//   };
// };

export default { filter, itemsAdd, itemsDel, addItemsFromLocalStor };
