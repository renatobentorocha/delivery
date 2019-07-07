import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ArrowBack } from '../Icons/Index';

import {
  Container,
  ContainerTitle,
  ContainerButton,
  PageBackGround,
  ButtonLeftIcon,
  Title,
  Price,
} from './styles';

class Header extends Component {
  static propTypes = {
    total: PropTypes.string.isRequired,
  };
  componentDidMount() {}

  render() {
    const { navigation, total } = this.props;

    return (
      <Container>
        <PageBackGround
          style={{ width: '100%', height: '100%' }}
          source={require('~/assets/header-background.png')}
        >
          <ContainerTitle>
            <ContainerButton>
              <ButtonLeftIcon onPress={() => navigation.goBack()}>
                <ArrowBack />
              </ButtonLeftIcon>
              <Title>Carrinho</Title>
            </ContainerButton>
            <Price>
              R$
              {total}
            </Price>
          </ContainerTitle>
        </PageBackGround>
      </Container>
    );
  }
}

export default Header;
