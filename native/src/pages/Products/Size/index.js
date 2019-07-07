import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Logout from '~/components/Logout';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductSizeActions from '~/store/ducks/productSize';
import CartActions from '~/store/ducks/cart';
import { getToken } from '~/services/auth';

import { Container, Products, ProductContainer, Product, Picture, Title } from './styles';

class Size extends Component {
  static propTypes = {
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
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
        picture_path: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool.isRequired,
    loadProductSizeRequest: PropTypes.func.isRequired,
    addItemCartRequest: PropTypes.func.isRequired,
  };

  state = {
    width: 0,
    height: 0,
  };

  async componentDidMount() {
    const { loadProductSizeRequest, navigation } = this.props;

    await loadProductSizeRequest(navigation.getParam('productTypeId'));
  }

  handleToCart = async id => {
    const { addItemCartRequest, navigation } = this.props;
    const productTypeId = navigation.getParam('productTypeId');

    const user = await getToken();

    addItemCartRequest({
      user_id: user.id,
      product_type_id: productTypeId,
      product_size_id: id,
    });

    navigation.navigate('ShoppingCar');
  };

  render() {
    const { sizes } = this.props;

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <Products
          keyExtractor={(item, index) => String(item.id)}
          numColumns={2}
          data={sizes}
          renderItem={({ item }) => (
            <ProductContainer>
              <Product onPress={() => this.handleToCart(item.id)}>
                <Picture
                  style={{ width: item.dimension.width, height: item.dimension.height }}
                  source={{ uri: item.picture_path }}
                />
                <Title>{item.description}</Title>
                <Title>
                  R$
                  {item.price}
                </Title>
              </Product>
            </ProductContainer>
          )}
        />
        <Logout />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.productSize.data,
  loading: state.productSize.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductSizeActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
