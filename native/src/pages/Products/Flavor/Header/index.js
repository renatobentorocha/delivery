import React, { Component } from 'react';

import { ArrowBack } from '../Icons/Index';

import { Container, ContainerButton, PageBackGround, ButtonLeftIcon, Title } from './styles';

class Header extends Component {
  componentDidMount() {}

  handleFlavor = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <PageBackGround
          style={{ width: '100%', height: '100%' }}
          source={require('~/assets/header-background.png')}
        >
          <ContainerButton>
            <ButtonLeftIcon onPress={() => this.handleFlavor()}>
              <ArrowBack />
            </ButtonLeftIcon>

            <Title>Selecione um tipo</Title>
          </ContainerButton>
        </PageBackGround>
      </Container>
    );
  }
}

export default Header;
