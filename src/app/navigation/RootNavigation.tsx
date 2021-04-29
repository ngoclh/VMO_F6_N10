import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';

import {DemoContext} from './demoContext';
import {DemoNavigation} from './demoNavigation';
import {DemoRedux} from './demoRedux';
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
    <RootStack.Navigator
      initialRouteName={APP_SCREEN.DEMO_REDUX}
      screenOptions={screenOptions}>
      <RootStack.Screen
        name={APP_SCREEN.DEMO_NAVIGATION}
        component={DemoNavigation}
      />
      <RootStack.Screen
        name={APP_SCREEN.DEMO_CONTEXT}
        component={DemoContext}
      />
      <RootStack.Screen name={APP_SCREEN.DEMO_REDUX} component={DemoRedux} />
    </RootStack.Navigator>
  );
};
