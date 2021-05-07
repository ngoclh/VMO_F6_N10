import {ReactElement} from 'react';
import {Todo} from '@model/N10_context';

export interface Action<T = any> {
  type: string;
  payload?: T;
}

export interface TodoContext {
  todoList: Array<Todo>;

  // ..
}

export interface TodoProviderProps {
  children: ReactElement;
}
