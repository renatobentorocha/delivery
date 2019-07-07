import { createAppContainer, createStackNavigator } from 'react-navigation';

import Signin from '~/pages/auth/signin';
import Signup from '~/pages/auth/signup';
import Home from '~/pages/Home';
import Flavor from '~/pages/Products/Flavor';
import Size from '~/pages/Products/Size';
import ShoppingCar from '~/pages/ShoppingCar';
import ConfirmPurchase from '~/pages/ConfirmPurchase';
import Purchases from '~/pages/Purchases';

const HomeStack = createStackNavigator(
  {
    Signin,
    Signup,
    Home,
    Flavor,
    Size,
    ShoppingCar,
    ConfirmPurchase,
    Purchases,
  },
  {
    initialRouteName: 'Signin',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Routes = createAppContainer(HomeStack);

export default Routes;
