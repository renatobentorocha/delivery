import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SigninActions from '../../store/ducks/signin';
import { getToken } from '../../services/auth';

import { Container, LoginContainer, Logo, Email, Password, Login, LoginText, Form } from './styles';

import logo from '../../assets/images/login/logo.png';

class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const user = getToken();

    if (user) {
      this.props.history.push('/app');
    }
  }

  handleSigin = () => {
    const { email, password } = this.state;
    const { signinRequest } = this.props;

    signinRequest(email, password);
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Container>
        <LoginContainer>
          <Logo src={logo} alt="" />
          <Form>
            <Email
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="text"
              placeholder="Seu e-mail"
            />
            <Password
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              placeholder="Senha secreta"
            />
            <Login type="button" onClick={() => this.handleSigin()}>
              <LoginText>Entrar</LoginText>
            </Login>
          </Form>
        </LoginContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signin.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
