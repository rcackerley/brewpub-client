import React from 'react';
import {Link} from 'react-router-dom';

let LoginForm = ({handlePassword, handleUserName}) =>
  <form className="login-form">
    <input onChange={(event) => handleUserName(event)} type="text" placeholder="username"/>
    <input onChange={(event) => handlePassword(event)} type="password" placeholder="password"/>
    <button>login</button>
    <p className="message">Not registered? <Link to="/create-account">Create an account</Link></p>
  </form>

export default LoginForm;
