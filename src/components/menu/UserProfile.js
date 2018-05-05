import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../actions/index';
import {getUserProfile} from '../../ajax/index';

class UserProfile extends React.Component {

  componentDidMount() {
    let {token, setUser} = this.props;
    getUserProfile(token)
    .then(user => {user.image === null ? user.image = "images/placeholder.png" : console.log('image found'); return user;})
    .then(user => setUser(user))
  }

  render() {
    let {user} = this.props;
    return (
      <div className="vertical-flex">
        <h2>My Account</h2>
        <img alt="user profile" className="menu-prof-image" src={user.image}/>
        <h3>{user.name}</h3>
        <p>email: {user.email}<br />
           password: ***********
        </p>

      </div>
    )
  }
}
let mapDispatchToProps = dispatch => ({setUser: (user) => dispatch(setUser(user)) });
let mapStateToProps = state => ({user: state.user, token: state.token})
let UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;
