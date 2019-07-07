import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import { getToken } from '~/services/auth';
import { TrashIcon, AddCartIcon, ArrowForward } from './Icons/Index';
import Header from './Header';
import Logout from '~/components/Logout';
import { formatNumberToCurrency } from '~/utils/NumberFormat';

import {
  Container,
  Products,
  ProductContainer,
  Product,
  Picture,
  Info,
  Title,
  Description,
  Price,
  Cancelar,
  Order,
  AddShoppingCar,
  Checkout,
  ButtonText,
} from './styles';

class ShoppingCar extends Component {
  static propTypes = {
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
    delItemCartRequest: PropTypes.func.isRequired,
    loadCartRequest: PropTypes.func.isRequired,
  };

  state = {
    user: {},
  };

  async componentDidMount() {
    const { loadCartRequest } = this.props;

    const user = await getToken();

    this.setState({ user });

    loadCartRequest(user.id);
  }

  total = cart =>
    formatNumberToCurrency(
      cart.reduce((total = 0, current) => {
        return total + Number(current.product_size.price);
      }, 0),
    );

  description = item => {
    switch (item.unit) {
      case 'ml':
        return `Lata ${item.size}ML`;

      default:
        return `Tamanho: ${item.description}`;
    }
  };

  render() {
    const { cart, navigation, delItemCartRequest } = this.props;
    const { user } = this.state;

    return (
      <Container>
        <Header navigation={navigation} total={this.total(cart)} />
        <Products
          keyExtractor={(item, index) => String(item.id)}
          data={cart}
          renderItem={({ item }) => (
            <ProductContainer>
              <Product>
                <Picture
                  width={item.product_type.dimension.width}
                  height={item.product_type.dimension.height}
                  source={{ uri: item.product_type.picture }}
                />
                <Info>
                  <Title>{item.product_type.description}</Title>
                  <Description>{this.description(item.product_size)}</Description>
                  <Price>R${formatNumberToCurrency(item.product_size.price)}</Price>
                </Info>
                <Cancelar onPress={() => delItemCartRequest(user.id, item.id)}>
                  <TrashIcon />
                </Cancelar>
              </Product>
            </ProductContainer>
          )}
        />
        <Order>
          <AddShoppingCar onPress={() => navigation.navigate('Home')}>
            <AddCartIcon />
          </AddShoppingCar>
          <Checkout onPress={() => navigation.navigate('ConfirmPurchase')}>
            <ButtonText>REALIZAR PEDIDO</ButtonText>
            <ArrowForward />
          </Checkout>
        </Order>
        <Logout />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.data,
  loading: state.cart.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCar);
