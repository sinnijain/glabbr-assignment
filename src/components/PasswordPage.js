import React from 'react';
import Welcome from './Welcome'
import { connect } from 'react-redux';
import { register } from '../redux/logInAction';
class PasswordPage extends React.Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            password : '',

            user : {}
        }
    }

    changeHandler = (event) => {
        event.preventDefault();

        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const { email } = this.props;
        const { password } = this.state;

        this.props.register(email,password);

        //clearing the form after wrong enteries or moving forward
        this.setState({
            password: ''
        });
    }

    render() { 
        
        const { password } = this.state;
        const { isLoginSuccess, loginError } = this.props;

        if(isLoginSuccess)
        {
            return <Welcome />
        }

        return ( 

            <div className="login-page" >
                <div className="form">
                    <h3>Create password</h3>

                    <form className="form-group">
                        <div className='label' >password </div>
                        <input type="password" name="password" id='password' onChange={this.changeHandler} value={password}/>
                
                        <p className="alert">
                            { loginError && <>{loginError.message}</> }
                        </p>

                        <button onClick={this.onSubmit} > Submit </button>

                    </form>
                </div>
            </div>

        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        loginError: state.loginError,
        isLoginSuccess: state.isLoginSuccess
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        register: (email,password) => dispatch(register(email,password))
    };
}
  
export default connect(mapStateToProps , mapDispatchToProps)(PasswordPage);