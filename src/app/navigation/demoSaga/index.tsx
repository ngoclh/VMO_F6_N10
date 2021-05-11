import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';

import {ListProduct} from '../../features/N10_redux_saga/listProduct/design';
import {store} from '../../features/N10_redux_saga/store';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoSaga = () => (
  <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.DS_LIST_PRODUCT} component={ListProduct} />
    </Stack.Navigator>
  </Provider>
);
