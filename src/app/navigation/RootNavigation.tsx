import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';

import {DemoNavigation} from './demoNavigation';
import {APP_SCREEN, RootStackParamList} from './screenTypes';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );
  // render
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen
        name={APP_SCREEN.DEMO_NAVIGATION}
        component={DemoNavigation}
      />
    </RootStack.Navigator>
  );
};
