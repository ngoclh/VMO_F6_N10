import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';

import {DemoAnimated} from './demoAnimated';
import {DemoContext} from './demoContext';
import {DemoNavigation} from './demoNavigation';
import {DemoRedux} from './demoRedux';
import {DemoSaga} from './demoSaga';
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
      initialRouteName={APP_SCREEN.DEMO_SAGA}
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
      <RootStack.Screen name={APP_SCREEN.DEMO_SAGA} component={DemoSaga} />
      <RootStack.Screen
        name={APP_SCREEN.DA_ANIMATED}
        component={DemoAnimated}
      />
    </RootStack.Navigator>
  );
};
