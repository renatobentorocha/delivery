import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignupActions from '~/store/ducks/signup';

import {
  MainContainer,
  Container,
  Name,
  Email,
  Password,
  Button,
  ButtonText,
  Logo,
  HasLogin,
  HasLoginText,
} from './styles';

import Loader from '~/components/Loader';

class Signup extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      token: PropTypes.string,
    }),
    signupRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const { navigation, user } = nextProps;

    if (user) {
      navigation.navigate('Signin');
    }
  }

  handleSignup = () => {
    const { signupRequest } = this.props;
    const { name, email, password } = this.state;

    signupRequest(name, email, password);
  };

  render() {
    const { navigation, loading } = this.props;
    return (
      <MainContainer>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('~/assets/Auth/fundo.png')}
        />
        <Container>
          <Logo source={require('~/assets/Auth/logo.png')} />
          <Name onChangeText={text => this.setState({ name: text })} />
          <Email onChangeText={text => this.setState({ email: text })} />
          <Password onChangeText={text => this.setState({ password: text })} />
          <Button onPress={() => this.handleSignup()}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <HasLogin onPress={() => navigation.navigate('Signin')}>
            <HasLoginText>Já tenho login</HasLoginText>
          </HasLogin>
        </Container>
        <Loader loading={loading} />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signup.data,
  loading: state.signup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
