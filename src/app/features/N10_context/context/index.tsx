import React, {createContext, useReducer} from 'react';

import {totoReducer} from '../reducer';

import {initialState} from './constants';
import {Action, TodoContext, TodoProviderProps} from './type';

export const todoContext = createContext<{
  store: TodoContext;
  dispatch: React.Dispatch<Action>;
}>({store: initialState, dispatch: () => null});

const {Provider} = todoContext;

const allReducers = ({todoList}: TodoContext, action: Action): TodoContext => ({
  todoList: totoReducer(todoList, action),
});

export const TodoProvider = ({children}: TodoProviderProps) => {
  // state
  const [store, dispatch] = useReducer(allReducers, initialState);
  // render
  return (
    <Provider
      value={{
        store,
        dispatch,
      }}>
      {children}
    </Provider>
  );
};
