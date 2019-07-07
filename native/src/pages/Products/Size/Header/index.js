import React, { Component } from 'react';

import { ArrowBack } from '../Icons/Index';

import {
  Container, ContainerButton, PageBackGround, ButtonLeftIcon, Title,
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
          <ContainerButton>
            <ButtonLeftIcon onPress={() => navigation.goBack()}>
              <ArrowBack />
            </ButtonLeftIcon>

            <Title>Selecione um tamanho</Title>
          </ContainerButton>
        </PageBackGround>
      </Container>
    );
  }
}

export default Header;
