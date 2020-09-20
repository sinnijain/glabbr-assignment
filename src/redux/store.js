import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import LogInReducer from './logInReducer'

const store = createStore(LogInReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;