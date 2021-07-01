import { createStore, applyMiddleware } from 'redux';
import { itemsReducer } from './reducers/reducer.js';
import  thunk  from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(itemsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
