import { createStore } from "redux";
import notesReducer from "../reducers/notesReducer";

const configureStore = () => {
  const store = createStore(notesReducer);

  return store;
};

export default configureStore;
