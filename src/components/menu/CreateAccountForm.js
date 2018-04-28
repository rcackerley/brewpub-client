import React from 'react';
import {Link} from 'react-router-dom';

let CreateAccountForm = ({handleEmail, handlePassword, handleUserName}) =>
  <form className="register-form">
    <input onChange={(event) => handleUserName(event)}type="text" placeholder="username"/>
    <input onChange={(event) => handlePassword(event)} type="password" placeholder="password"/>
    <input onChange={(event) => handleEmail(event)} type="text" placeholder="email address"/>
    <button>create account</button>
    <p className="message">Already registered? <Link to="/menu">Sign In</Link></p>
  </form>

export default CreateAccountForm;
