import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/logInAction';
import PasswordPage from './PasswordPage';
import '../styles/style.css';

class LogInPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email : '',
      SAVED_EMAIL : ''
    };


  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onNext = (event) => {
    event.preventDefault();
    const { email } = this.state;

    this.props.login(email);

    //save email first in a state ..
    this.setState( (prevState) => {
      return {
        ...prevState,
        SAVED_EMAIL : email,
        email : '',
      }
    
    });
    

  }




  render() {
    const {email , SAVED_EMAIL} = this.state;
    const {isLoginPending, loginError , isEmailMatchDomain} = this.props;

    if(isEmailMatchDomain)
    {
      return <PasswordPage email={SAVED_EMAIL}/>
    }

    return (
      <div className="login-page" >
        <div className="form">
          <h3>Login</h3>

          <form className="login-form">
            <div className='label'>Enter your E-mail</div>
            <input type="text" name="email" id='email' placeholder="example@domain.com" onChange={this.changeHandler} value={email}/>
          </form>

          
          <p className='alert'>
            { isLoginPending && <>Please wait...</> }
            { loginError && <>{loginError.message}</> }
          </p>

          <button onClick={this.onNext} > Next </button>

          <p className="message">Not registered? <>Create an account</></p>

        </div>

        

        
      </div>
    )
  }

  
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    loginError: state.loginError,
    isEmailMatchDomain: state.isEmailMatchDomain
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email) => dispatch(login(email))
  };
}

export default connect(mapStateToProps , mapDispatchToProps)(LogInPage);