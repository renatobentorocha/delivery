import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { parse, distanceInWordsToNow, formatDistance, formatRelativ } from 'date-fns';
import pt from 'date-fns/locale/pt';

import OrderActions from '~/store/ducks/order';

import Loader from '~/components/Loader';
import Header from './Header';
import Logout from '~/components/Logout';

import { getToken } from '~/services/auth';

import { formatNumberToCurrency } from '~/utils/NumberFormat';

import { Container, Items, Item, Title, ItemDate, Price } from './styles';

class Purchases extends Component {
  static propTypes = {
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        date: PropTypes.string,
        note: PropTypes.string,
        zip_code: PropTypes.string,
        street: PropTypes.string,
        number: PropTypes.number,
        district: PropTypes.string,
        createdAt: PropTypes.string,
        order_item: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            amount: PropTypes.number,
            product_type: PropTypes.shape({
              id: PropTypes.number,
              description: PropTypes.string,
              picture: PropTypes.string,
            }),
            product_size: PropTypes.shape({
              price: PropTypes.string,
            }),
          }),
        ),
      }),
    ),
    loading: PropTypes.bool.isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { loadOrderRequest } = this.props;

    const user = await getToken();

    loadOrderRequest(user.id);
  }

  total = cart =>
    formatNumberToCurrency(
      cart.reduce((total = 0, current) => {
        return total + Number(current.product_size.price);
      }, 0),
    );

  render() {
    const { navigation, loading, orders } = this.props;

    return (
      <Container>
        <Header navigation={navigation} />
        <Items
          keyExtractor={(item, index) => String(item.id)}
          data={orders}
          renderItem={({ item, index }) => (
            <Item>
              <Title>Pedido #{orders.length - index}</Title>
              <ItemDate>Há {distanceInWordsToNow(parse(item.createdAt), { locale: pt })}</ItemDate>
              <Price>
                R$
                {this.total(item.order_item)}
              </Price>
            </Item>
          )}
        />
        <Loader loading={loading} />
        <Logout />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.data,
  loading: state.order.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Purchases);
