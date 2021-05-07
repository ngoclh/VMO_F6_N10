import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {AnimatedDemo} from '../../features/N10_Animated/animated/design';
import {TodoProvider} from '../../features/N10_context/context';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoAnimated = () => (
  <TodoProvider>
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.DA_ANIMATED} component={AnimatedDemo} />
    </Stack.Navigator>
  </TodoProvider>
);
