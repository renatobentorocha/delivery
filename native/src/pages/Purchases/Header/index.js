import React, { Component } from 'react';

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
  componentDidMount() {}

  render() {
    const { navigation } = this.props;
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
              <Title>Meus pedidos</Title>
            </ContainerButton>
          </ContainerTitle>
        </PageBackGround>
      </Container>
    );
  }
}

export default Header;
