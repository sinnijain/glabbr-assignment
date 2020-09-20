import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR,SET_EMAIL_VERIFIED} from './logInType';
import emailAuthentication from '../components/authenticate/emailAuthentication'  
import axios from 'axios';

  function setLoginPending(isLoginPending) {
    return {
      type: SET_LOGIN_PENDING,
      isLoginPending
    };
  }

  function setEmailVerification(isEmailMatchDomain) {
    return {
      type : SET_EMAIL_VERIFIED,
      isEmailMatchDomain
    }
  }
  
  function setLoginSuccess(isLoginSuccess) {
    return {
      type: SET_LOGIN_SUCCESS,
      isLoginSuccess
    };
  }
  
  function setLoginError(loginError) {
    return {
      type: SET_LOGIN_ERROR,
      loginError
    }
  }



  //to register



  export function register(email,password) {
    return dispatch => {
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));

      callRegisterApi( email , password , error => {

        if (!error) {
          console.log('EMAIL : ' + email);
          console.log('PASSWORD : ' + password);
          dispatch(setLoginSuccess(true));
        } 
        
        else {
          dispatch(setLoginError(error));
        }

      });


    }
  }

  function callRegisterApi ( email , password , callback )
  {

    if(password.length < 8)
    {
      return callback( new Error("minimum length of password should be 8"))
    }

    axios.post("https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9" ,
    {
      loginResult: "SUCCESS",
      user:{
          userId:"5ae01d99-9048-4e57-b4bc-20439322445g",
          email:"mockUser@glabbr.com",
          firstName:"sawai",
          lastName:"jain"
      },
      companyName:"Glabbr Inc."
    } )

    .then( response => {
      console.log('...................................................................')
      console.log('POST RESPONSE : ' )
      console.log(response)
      console.log('...................................................................')

      return callback(null);
    })

    .catch( (error) => {
      return callback( new Error('unable to access database url'))
    })

  }



  //to check mail address is validate (is he have access?)



  export function login(email) {
    return dispatch => {
      dispatch(setLoginPending(true));
      dispatch(setEmailVerification(false));
      dispatch(setLoginError(null))
      

      //authentication of email..does it match with admin?
      callEmailAuthenticationApi(email , error => {
        dispatch(setLoginPending(false));

        if (!error) {
          dispatch(setEmailVerification(true));
        } 
        
        else {
          dispatch(setLoginError(error));
        }
      });
    }
  }

  
  
  function callEmailAuthenticationApi(email, callback) {
    
        
    return emailAuthentication(email,callback);
      
    
  }