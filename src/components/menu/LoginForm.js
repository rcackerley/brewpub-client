import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signIn} from  '../../ajax/index';
import {connect} from 'react-redux';
import {setToken} from '../../actions/index';

let LoginForm = ({handlePassword, handleUserName, emailInput, passwordInput, setToken, history}) =>
  <form className="login-form">
    <input onChangeText={(text) => handleUserName(text)} type="text" placeholder="email"/>
    <input onChange={(event) => handlePassword(event)} type="password" placeholder="password"/>
    <button onClick={(event) => {
      event.preventDefault();
      signIn({email: emailInput, password: passwordInput})
      .then(token => {localStorage.setItem('token', JSON.stringify(token)); return token})
      .then(token => setToken(token))
      .then(res => history.push('/'))
      .catch(err => console.log(err))
    }
    }>login</button>
    <p className="message">Not registered? <Link to="/create-account">Create an account</Link></p>
  </form>

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
let LoginFormContainerWithRouter = withRouter(LoginFormContainer);
export default LoginFormContainerWithRouter;
