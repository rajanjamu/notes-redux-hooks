import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "../reducers/notesReducer";

const configureStore = () => {
  const store = createStore(
    notesReducer,
    composeWithDevTools(applyMiddleware())
  );

  return store;
};

export default configureStore;
