import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import Thunk from 'redux-thunk'


const store = createStore(rootReducer,{}, applyMiddleware(Thunk));

export default store;