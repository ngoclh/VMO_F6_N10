import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {AddTodo} from '../../features/N10_context/addTodo/design';
import {TodoProvider} from '../../features/N10_context/context';
import {TodoList} from '../../features/N10_context/todoList/design';
import {APP_SCREEN} from '../screenTypes';

const Stack = createStackNavigator();

export const DemoContext = () => (
  <TodoProvider>
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.DC_TODO_LIST} component={TodoList} />
      <Stack.Screen name={APP_SCREEN.DC_ADD_TOTO} component={AddTodo} />
    </Stack.Navigator>
  </TodoProvider>
);
