import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notesReducer from '../reducers/notesReducer';

const configureStore = () => {
  const store = createStore(
    notesReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
