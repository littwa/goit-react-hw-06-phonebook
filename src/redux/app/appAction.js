import { v4 as uuidv4 } from "uuid";
import { ADD_ITEMS, DEL_ITEMS, FILTER, ITEMS_LOCAL_STOR } from "./appTypes";

const addItemsFromLocalStor = (arrItems) => ({
  type: ITEMS_LOCAL_STOR,
  payload: {
    arrItems,
  },
});

const itemsAdd = (name, number) => {
  return {
    type: ADD_ITEMS,
    payload: { items: { id: uuidv4(), name, number } },
  };
};

const itemsDel = (id) => {
  return {
    type: DEL_ITEMS,
    payload: {
      id,
    },
  };
};

const filter = (filter) => {
  return {
    type: FILTER,
    payload: {
      filter,
    },
  };
};

export default { filter, itemsAdd, itemsDel, addItemsFromLocalStor };
