import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';

import {Increment} from '../../features/N10_redux_saga/increment/design';
import {store} from '../../features/N10_redux_saga/store';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoSaga = () => (
  <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.DS_INCREMENT} component={Increment} />
    </Stack.Navigator>
  </Provider>
);
