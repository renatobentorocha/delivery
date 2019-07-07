import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddressActions from '~/store/ducks/address';
import OrderActions from '~/store/ducks/order';
import OrderItemActions from '~/store/ducks/orderItem';
import { formatNumberToCurrency } from '~/utils/NumberFormat';
import Loader from '~/components/Loader';
import { ArrowForward } from './Icons/Index';
import Header from './Header';
import Logout from '~/components/Logout';
import { getToken } from '~/services/auth';

import {
  Container,
  ConfirmationData,
  Comments,
  ZipCode,
  Address,
  Street,
  StreetNumber,
  District,
  Order,
  Checkout,
  ButtonText,
} from './styles';

class ConfirmPurchase extends Component {
  static propTypes = {
    address: PropTypes.shape({
      cep: PropTypes.string,
      logradouro: PropTypes.string,
      complemento: PropTypes.string,
      bairro: PropTypes.string,
      uf: PropTypes.string,
      unidade: PropTypes.string,
      ibge: PropTypes.string,
      gia: PropTypes.string,
    }),
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        product_type_id: PropTypes.number,
        product_size_id: PropTypes.number,
        product_type: PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string,
          picture: PropTypes.string,
          product_id: PropTypes.number,
          dimension: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
          }),
        }),
        product_size: PropTypes.shape({
          id: PropTypes.number,
          size: PropTypes.string,
          price: PropTypes.string,
          unit: PropTypes.string,
          description: PropTypes.string,
          picture: PropTypes.string,
          product_type_id: PropTypes.number,
          dimension: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
          }),
        }),
      }),
    ),
    loading: PropTypes.bool.isRequired,
  };

  state = {
    note: '',
    zip_code: '',
    street: '',
    number: '',
    district: '',
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const { address } = nextProps;

    this.setState({
      zip_code: address.cep,
      street: address.logradouro,
      district: address.bairro,
    });
  }

  total = cart =>
    formatNumberToCurrency(
      cart.reduce((total = 0, current) => {
        return total + Number(current.product_size.price);
      }, 0),
    );

  handleSearchAddress = text => {
    this.setState({ zip_code: text });

    const cep = text.replace(/\D/g, '');

    const regularExpressionCep = /^[0-9]{8}$/;

    if (regularExpressionCep.test(cep)) {
      const { loadAddressRequest } = this.props;

      loadAddressRequest(cep);
    }
  };

  handleFinalize = async () => {
    const { navigation, addOrderRequest, cart } = this.props;

    const user = await getToken();

    const data = {
      date: new Date(),
      note: this.state.note,
      zip_code: this.state.zip_code.replace(/\D/g, ''),
      street: this.state.street,
      number: this.state.number,
      district: this.state.district,
      items: cart.map(item => {
        return {
          id: item.id,
          product_type_id: item.product_type_id,
          product_size_id: item.product_size_id,
        };
      }),
    };

    addOrderRequest(user.id, data);

    navigation.navigate('Home');
  };

  render() {
    const { cart, loading, navigation } = this.props;

    return (
      <Container>
        <Header navigation={navigation} total={this.total(cart)} />
        <ConfirmationData>
          <Comments value={this.state.note} onChangeText={text => this.setState({ note: text })} />
          <ZipCode
            value={this.state.zip_code}
            keyboardType={'numeric'}
            onChangeText={text => this.handleSearchAddress(text)}
          />
          <Address>
            <Street value={this.state.street} onChange={text => this.setState({ street: text })} />
            <StreetNumber
              value={this.state.number}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({ number: text })}
            />
          </Address>
          <District
            value={this.state.district}
            onChangeText={text => this.setState({ district: text })}
          />
          <Order>
            <Checkout onPress={() => this.handleFinalize()}>
              <ButtonText>FINALIZAR</ButtonText>
              <ArrowForward />
            </Checkout>
          </Order>
        </ConfirmationData>
        <Loader loading={loading} />
        <Logout />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.data,
  address: state.address.data,
  loading: state.address.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AddressActions, ...OrderItemActions, ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmPurchase);
