import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileThumbnailImage} from '../../ajax/index';
import {setUserImage} from '../../actions/index';

class ProfileImage extends React.Component {

  componentDidMount() {
    let {token, setUserImage} = this.props;
    token &&
    getProfileThumbnailImage(token)
    .then(res => res.image ? setUserImage(res.image) : console.log('No image available'));
  }

  render() {
    let {user} = this.props;
    return (
      <Link to="/menu">
          <img alt="profile" className="prof-thumbnail" src={'/' + user.image} />
      </Link>
    )
  }
}

let mapStateToProps = state => ({token: state.token, user: state.user});
let mapDispatchToProps = dispatch => ({setUserImage: (image) => dispatch(setUserImage(image)) })
let ProfileImageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileImage);
export default ProfileImageContainer;


// { token ? getProfileThumbnailImage(token)
//   .then(res => console.log(res))
//   .catch(error => <img alt="profile" className="prof-thumbnail" src="images/kristen.jpg" /> )
//   : <img alt="profile" className="prof-thumbnail" src="images/robby.jpg" /> }
