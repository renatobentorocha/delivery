import React, { Component } from 'react';
import PropTypes from 'prop-types';
import socket from 'socket.io-client';
import { parse, distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '../../store/ducks/order';
import { formatNumberToCurrency } from '../../utils/NumberFormat';

import {
  Container,
  Title,
  Pedidos,
  ContainerPedido,
  Pedido,
  Customer,
  Time,
  Price,
  Separator,
  ItemsContainer,
  ItemContainer,
  Image,
  ItemDescription,
  Description,
  Size,
  Note,
} from './styles';

class Orders extends Component {
  static propTypes = {
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        createdAt: PropTypes.string,
        note: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string,
        }),
        order_item: PropTypes.arrayOf(
          PropTypes.shape({
            amount: PropTypes.number,
            product_type: PropTypes.shape({
              id: PropTypes.number,
              description: PropTypes.string,
              picture: PropTypes.string,
              dimension: PropTypes.shape({
                width: PropTypes.number,
                height: PropTypes.number,
              }),
            }),
            product_size: PropTypes.shape({
              price: PropTypes.string,
              size: PropTypes.string,
              unit: PropTypes.string,
              description: PropTypes.string,
            }),
          }),
        ),
      }),
    ),
    loading: PropTypes.bool.isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const io = socket(process.env.REACT_APP_API_URL);

    io.on('connect', () => {});

    io.on('order', data => {
      loadOrderRequest();
    });

    const { loadOrderRequest } = this.props;

    loadOrderRequest();
  }

  total = items =>
    formatNumberToCurrency(
      items.reduce((total = 0, current) => {
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

  renderImage = items => (
    <ItemsContainer>
      {items.map(item => (
        <ItemContainer key={Math.random().toString()}>
          <Image height={70} width={70} src={item.product_type.picture} />
          <ItemDescription>
            <Description>{item.product_type.description}</Description>
            <Size>{this.description(item.product_size)}</Size>
          </ItemDescription>
        </ItemContainer>
      ))}
    </ItemsContainer>
  );

  render() {
    const { orders } = this.props;
    return (
      <Container>
        <Title>Últimos pedidos</Title>
        <Pedidos>
          {orders.map((order, index, array) => (
            <ContainerPedido key={order.id.toString()}>
              <Pedido>
                <Customer>
                  Pedido <b>#{array.length - index}</b> - {order.user.name}
                </Customer>
                <Time>{distanceInWordsToNow(parse(order.createdAt), { locale: pt })}</Time>

                <Price>R${this.total(order.order_item)}</Price>
                <Separator></Separator>
                {this.renderImage(order.order_item)}
                <Separator></Separator>
                <Note>
                  <b>Observações:</b> {order.note}
                </Note>
              </Pedido>
            </ContainerPedido>
          ))}
        </Pedidos>
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
)(Orders);
