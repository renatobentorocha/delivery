import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SigninActions from '~/store/ducks/signin';
import { navigate } from '~/services/NavigationService';

import {
  Container, ButtonLogout, LogoutIcon, ButtonHome, HomeIcon,
} from './styles';

const Logout = ({ logoutRequest }) => (
  <Container>
    <ButtonHome onPress={() => navigate('Home')}>
      <HomeIcon />
    </ButtonHome>
    <ButtonLogout onPress={() => logoutRequest()}>
      <LogoutIcon />
    </ButtonLogout>
  </Container>
);

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
