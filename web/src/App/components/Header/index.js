import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SigninActions from '../../store/ducks/signin';

import { getUser } from '../../services/auth';
import pizza from '../../assets/images/header/pizza.svg';
import bag from '../../assets/images/header/bag.png';

import {
  Container,
  Title,
  User,
  Name,
  NameContainer,
  Logout,
  Separator,
  Shopping,
  Sign,
  Bag,
} from './styles';

class Header extends Component {
  static propTypes = {
    logoutRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {}

  render() {
    const user = getUser();
    const { logoutRequest } = this.props;

    return (
      <Container>
        <Title>
          <img src={pizza} alt="" />
          <span>Pizzaria Don Juan</span>
        </Title>

        <User>
          <NameContainer>
            <Name>{user.name}</Name>
            <Logout onClick={() => logoutRequest()}>Sair do app</Logout>
          </NameContainer>
          <Separator />
          <Shopping>
            <Sign />
            <Bag src={bag} alt="" />
          </Shopping>
        </User>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signin.data,
  orders: state.order.data ? state.order.data.length : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
