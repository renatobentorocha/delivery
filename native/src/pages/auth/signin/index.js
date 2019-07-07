import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SigninActions from '~/store/ducks/signin';

import { getToken } from '~/services/auth';

import {
  MainContainer,
  Container,
  Email,
  Password,
  Button,
  ButtonText,
  Logo,
  HasLogin,
  HasLoginText,
  Error,
} from './styles';

import Loader from '~/components/Loader';

class Signin extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      token: PropTypes.string,
    }),
    signinRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  async componentDidMount() {
    this.setState({ email: '', password: '' });

    const user = await getToken();

    if (user) {
      const { navigation } = this.props;

      navigation.navigate('Home');
    }
  }

  handleSignin = () => {
    const { signinRequest } = this.props;
    const { email, password } = this.state;

    signinRequest(email, password);
  };

  render() {
    const { loading, error, navigation } = this.props;

    return (
      <MainContainer>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('~/assets/Auth/fundo.png')}
        />
        <Container>
          <Logo source={require('~/assets/Auth/logo.png')} />
          <Email onChangeText={text => this.setState({ email: text })} />
          <Password onChangeText={text => this.setState({ password: text })} />
          <Button onPress={() => this.handleSignin()}>
            <ButtonText>Entrar</ButtonText>
          </Button>
          <HasLogin onPress={() => navigation.navigate('Signup')}>
            <HasLoginText>Criar conta gratuita</HasLoginText>
            <Error>{error}</Error>
          </HasLogin>
        </Container>
        <Loader loading={loading} />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signin.data,
  loading: state.signin.loading,
  error: state.signin.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
