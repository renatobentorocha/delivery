import { combineReducers } from 'redux';
import { reducer as products } from './products';
import { reducer as productTypes } from './productTypes';
import { reducer as productSize } from './productSize';
import { reducer as cart } from './cart';
import { reducer as address } from './address';
import { reducer as order } from './order';
import { reducer as orderItem } from './orderItem';
import { reducer as signin } from './signin';
import { reducer as signup } from './signup';
import { reducer as modal } from './modal';

export default combineReducers({
  products,
  productTypes,
  productSize,
  cart,
  address,
  order,
  orderItem,
  signin,
  signup,
  modal,
});
