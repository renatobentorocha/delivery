import { all, takeLatest } from 'redux-saga/effects';
import { ProductTypes } from '~/store/ducks/products';
import { TypesOfProduct } from '~/store/ducks/productTypes';
import { TypesProductSize } from '~/store/ducks/productSize';
import { CartTypes } from '~/store/ducks/cart';
import { AddressTypes } from '~/store/ducks/address';
import { OrderTypes } from '~/store/ducks/order';
import { OrderItemTypes } from '~/store/ducks/orderItem';
import { loadProducts } from './products';
import { loadProductTypes } from './productTypes';
import { loadProductSize } from './productSize';
import { loadCart, addItemToCart, delItemCart, delCart } from './cart';
import { loadAddress } from './address';
import { loadOrder, addOrder } from './order';
import { addOrderItem } from './orderItem';
import { SigninTypes } from '~/store/ducks/signin';
import { loginUser, logoutUser } from './signin';
import { SignupTypes } from '~/store/ducks/signup';
import { signupUser } from './signup';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductTypes.LOAD_PRODUCT_REQUEST, loadProducts),
    takeLatest(TypesOfProduct.LOAD_PRODUCT_TYPES_REQUEST, loadProductTypes),
    takeLatest(TypesProductSize.LOAD_PRODUCT_SIZE_REQUEST, loadProductSize),
    takeLatest(CartTypes.LOAD_CART_REQUEST, loadCart),
    takeLatest(CartTypes.ADD_ITEM_CART_REQUEST, addItemToCart),
    takeLatest(CartTypes.DEL_CART_REQUEST, delCart),
    takeLatest(CartTypes.DEL_ITEM_CART_REQUEST, delItemCart),
    takeLatest(AddressTypes.LOAD_ADDRESS_REQUEST, loadAddress),
    takeLatest(OrderTypes.LOAD_ORDER_REQUEST, loadOrder),
    takeLatest(OrderTypes.ADD_ORDER_REQUEST, addOrder),
    takeLatest(OrderItemTypes.ADD_ORDER_ITEM_REQUEST, addOrderItem),
    takeLatest(SigninTypes.SIGNIN_REQUEST, loginUser),
    takeLatest(SigninTypes.LOGOUT_REQUEST, logoutUser),
    takeLatest(SignupTypes.SIGNUP_REQUEST, signupUser),
  ]);
}
