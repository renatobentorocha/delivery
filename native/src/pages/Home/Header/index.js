import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerButton,
  PageBackGround,
  ButtonLeftIcon,
  Title,
  ButtonRightIcon,
  Sign,
} from './styles';

import { Clock } from '~/pages/Home/Icons/Index';
import { Bag } from '~/pages/Home/Icons/Index';

class Header extends Component {
  static propTypes = {
    hasCart: PropTypes.bool.isRequired,
  };

  componentDidMount() {}

  handleCart = () => {
    const { navigation } = this.props;

    navigation.navigate('ShoppingCar');
  };

  render() {
    const { navigation, hasCart } = this.props;

    return (
      <Container>
        <PageBackGround
          style={{ width: '100%', height: '100%' }}
          source={require('~/assets/header-background.png')}
        >
          <ContainerButton>
            <ButtonLeftIcon onPress={() => navigation.navigate('Purchases')}>
              <Clock />
            </ButtonLeftIcon>
            <Title>Pizzaria Don Juan</Title>
            <ButtonRightIcon style={{ borderRadius: 50 }} onPress={() => this.handleCart()}>
              {hasCart && <Sign />}
              <Bag />
            </ButtonRightIcon>
          </ContainerButton>
        </PageBackGround>
      </Container>
    );
  }
}

export default Header;
