import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../actions/index';
import {getUserProfile, uploadImage} from '../../ajax/index';
import {withRouter} from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        uploadStatus: false
      }
    this.handleUploadImage = this.handleUploadImage.bind(this);

  }

  handleUploadImage(event, token) {
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    console.log(data)
    uploadImage(data, token)
    .then(user => this.props.setUser(user))
    .catch(err => console.log(err))

  }

  componentDidMount() {
    let {token, setUser, user, history} = this.props;
    getUserProfile(token)
    .then(user => {user.image === null ? user.image = "images/placeholder.png" : console.log('image found'); return user;})
    .then(user => setUser(user))
    .catch(err => history.push('/login'))
  }

  render() {

    let {user, token} = this.props;
    console.log(user.image)
    return (
      <div className="vertical-flex">
        <h2>My Account</h2>
        <div className="avatar">
          <img alt="user profile" className="menu-prof-image" src={user.image}/>
          <div className="avatar-edit">
            <img className="edit-icon" src="/images/edit-icon.png" />
            <input onChange={event => this.handleUploadImage(event, token)} ref={(ref) => { this.uploadInput = ref; this.fileName = ref }}
            className="uploader" type="file" name="image1" id="image1" accept=".gif, .jpg, .png" />

          </div>

        </div>
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
let UserProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
export default UserProfileContainer;
