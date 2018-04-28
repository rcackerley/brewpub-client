import React from 'react';
import CreateAccountForm from './CreateAccountForm';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: null,
      passwordInput: null,
      emailInput: null
    }
  }

  render() {
    let handleUserName = (event) =>
      this.setState({usernameInput: event.target.value})
    let handlePassword = (event) =>
      this.setState({passwordInput: event.target.value})
    let handleEmail = (event) =>
      this.setState({emailInput: event.target.value})

    return (
      <div className="menu-page">
        <div className="form">
          <CreateAccountForm handleUserName={handleUserName} handlePassword={handlePassword} handleEmail={handleEmail} />
        </div>
      </div>
    )
  }
}

export default CreateAccount;
