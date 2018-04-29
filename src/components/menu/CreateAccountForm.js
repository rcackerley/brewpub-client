import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {createAccount} from  '../../ajax/index';
import {setToken} from '../../actions/index';
import {connect} from 'react-redux';

let CreateAccountForm = ({handleEmail, handlePassword, handleUserName, emailInput, usernameInput, passwordInput, setToken, history}) =>
  <form className="register-form">
    <input onChange={(event) => handleUserName(event)}type="text" placeholder="username"/>
    <input onChange={(event) => handlePassword(event)} type="password" placeholder="password"/>
    <input onChange={(event) => handleEmail(event)} type="text" placeholder="email address"/>
    <button onClick={
      (event) => {
        event.preventDefault();
        createAccount({name: usernameInput, email: emailInput, password: passwordInput})
        .then(token => {localStorage.setItem('token', JSON.stringify(token)); return token})
        .then(token => setToken(token))
        .then(res => history.push('/'))
      }
    }>create account</button>
    <p className="message">Already registered? <Link to="/menu">Sign In</Link></p>
  </form>

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let CreateAccountFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);
let CreateAccountFormContainerWithRouter = withRouter(CreateAccountFormContainer);
export default CreateAccountFormContainerWithRouter;
