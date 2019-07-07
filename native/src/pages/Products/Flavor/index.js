import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsTypesActions from '~/store/ducks/productTypes';
import ModalActions from '~/store/ducks/modal';

import Header from './Header';
import Logout from '~/components/Logout';

import { Container, Products, ProductContainer, Product, Picture, Title } from './styles';

class Flavor extends Component {
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
    loadProductTypesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadProductTypesRequest, navigation } = this.props;

    loadProductTypesRequest(navigation.getParam('productId'));
  }

  handleProductType = productTypeId => {
    const { navigation } = this.props;

    const productId = navigation.getParam('productId');

    navigation.navigate('Size', { productId, productTypeId });
  };

  render() {
    const { products } = this.props;

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <Products
          keyExtractor={(item, index) => String(item.id)}
          numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <ProductContainer>
              <Product onPress={() => this.handleProductType(item.id)}>
                <Picture source={{ uri: item.picture_path }} />
                <Title>{item.description}</Title>
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
  products: state.productTypes.data,
  loading: state.productTypes.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductsTypesActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Flavor);
