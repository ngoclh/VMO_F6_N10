import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {DetailProduct} from '../../features/N10_navigation/detailProduct/design';
import {ListProducts} from '../../features/N10_navigation/listProducts/design';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.LIST_PRODUCTS} component={ListProducts} />
      <Stack.Screen
        name={APP_SCREEN.DETAIL_PRODUCT}
        component={DetailProduct}
      />
    </Stack.Navigator>
  );
};
