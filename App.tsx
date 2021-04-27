import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigation} from './src/app/navigation/AppNavigation';

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};
