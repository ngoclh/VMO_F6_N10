import faker from 'faker';

import {Todo} from '../../../model/N10_context';

import {ADD_TODO_LIST, REMOVE_TODO_LIST} from './actionTypes';
export type TodoListType = {
  todoList: Array<Todo>;
};

const initialState: TodoListType = {
  todoList: [
    {
      id: faker.datatype.uuid(),
      task: 'Tìm hiểu redux',
      time: 3,
    },
    {
      id: faker.datatype.uuid(),
      task: 'Tìm hiểu context',
      time: 5,
    },
    {
      id: faker.datatype.uuid(),
      task: 'Tích hợp redux',
      time: 5,
    },
  ],
};

export const todoListReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REMOVE_TODO_LIST:
      return {...state, todoList: state.todoList.slice(1)};

    case ADD_TODO_LIST:
      return {...state, todoList: state.todoList.concat([payload])};
    default:
      return state;
  }
};
