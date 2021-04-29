import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';

import {AddTodoRX} from '../../features/N10_redux/addTodo/design';
import {store} from '../../features/N10_redux/store';
import {TodoListRX} from '../../features/N10_redux/todoList/design';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoRedux = () => (
  <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.DR_TODO_LIST} component={TodoListRX} />
      <Stack.Screen name={APP_SCREEN.DR_ADD_TOTO} component={AddTodoRX} />
    </Stack.Navigator>
  </Provider>
);
