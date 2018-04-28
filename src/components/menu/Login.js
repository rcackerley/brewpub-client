import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: null,
      passwordInput: null,
    }
  }

  render() {
    let handleUserName = (event) =>
      this.setState({usernameInput: event.target.value})
    let handlePassword = (event) =>
      this.setState({passwordInput: event.target.value})

    return (
      <div className="form">
        <LoginForm handleUserName={handleUserName} handlePassword={handlePassword} />
      </div>
    )
  }
}

export default Login;
