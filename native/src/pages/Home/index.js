import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import ProductsTypesActions from '~/store/ducks/productTypes';
import CartActions from '~/store/ducks/cart';
import SigninActions from '~/store/ducks/signin';

import Loader from '~/components/Loader';
import Logout from '~/components/Logout';

import Header from './Header';
import { Alarm } from '~/pages/Home/Icons/Index';

import { getToken } from '~/services/auth';

import {
  Container,
  Products,
  ProductContainer,
  Product,
  Picture,
  Info,
  Title,
  Description,
  Time,
} from './styles';

class Home extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        picture: PropTypes.string,
        time: PropTypes.number,
        picture_path: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool.isRequired,
    hasCart: PropTypes.bool.isRequired,
    loadProductRequest: PropTypes.func.isRequired,
    loadCartRequest: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { loadProductRequest, loadCartRequest } = this.props;

    const user = await getToken();

    if (user) {
      loadCartRequest(user.id);
      loadProductRequest();
    }
  }

  load = () => {};

  handleProductFlavor = productId => {
    const { navigation } = this.props;

    navigation.navigate('Flavor', { productId });
  };

  render() {
    const { products, loading, hasCart } = this.props;

    return (
      <Container>
        <Header hasCart={hasCart} navigation={this.props.navigation} />
        <Products
          keyExtractor={(item, index) => String(item.id)}
          data={products}
          renderItem={({ item }) => (
            <ProductContainer>
              <Product onPress={() => this.handleProductFlavor(item.id)}>
                <Picture source={{ uri: item.picture_path }} />
                <Info>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Time>
                    <Alarm />
                    {item.time}
                    mins
                  </Time>
                </Info>
              </Product>
            </ProductContainer>
          )}
        />
        <Loader loading={loading} />
        <Logout />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  loading: state.products.loading,
  hasCart: state.cart.data.length > 0,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...SigninActions, ...ProductsActions, ...ProductsTypesActions, ...CartActions },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
