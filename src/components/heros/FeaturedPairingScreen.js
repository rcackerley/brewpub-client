import React, {Fragment} from 'react';
import Navbar from '../navigation/Navbar';
import HeroPairing from '../heros/HeroPairing';
import {withRouter} from 'react-router-dom';
import {getPairing} from '../../ajax/index';
import Footer from '../footer/Footer';

class FeaturedPairingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairing: {}
    }
  }
  componentDidMount() {
    let id = this.props.history.location.pathname.slice(10);
    getPairing(id)
    .then(pairing => this.setState({pairing: pairing}))
  }

  render() {
    let {pairing} = this.state
    return (
      <Fragment>
        <Navbar />
        <HeroPairing pairing={pairing} />
        <Footer />
      </Fragment>
    )
  }
}


export default withRouter(FeaturedPairingScreen);
