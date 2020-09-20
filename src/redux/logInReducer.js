import initialState from './initialState'
import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR,SET_EMAIL_VERIFIED} from './logInType';


export default function reducer(state = initialState, action) 
  {
    switch (action.type) {
      case SET_LOGIN_PENDING:
        return ({
            ...state,
            isLoginPending: action.isLoginPending
        });
  
      case SET_LOGIN_SUCCESS:
        return ({
            ...state,
            isLoginSuccess: action.isLoginSuccess
        });
  
      case SET_LOGIN_ERROR:
        return ({
            ...state,
            loginError: action.loginError
        });

      case SET_EMAIL_VERIFIED:
        return ({
            ...state,
            isEmailMatchDomain: action.isEmailMatchDomain
        });
  
      default:
        return state;
    }
  }