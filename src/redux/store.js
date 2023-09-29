import { createStore } from 'redux';
import reducers from './reducers';

// Passing counterReducer to createStore
const store = createStore(reducers);
export default store;