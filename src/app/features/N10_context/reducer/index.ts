import {Todo} from '../../../model/N10_context';
import {ADD_TODO_LIST, REMOVE_TODO_LIST} from '../actionTypes';
import {Action} from '../context/type';
export const totoReducer = (state: Array<Todo>, action: Action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return [...state, action.payload];
    case REMOVE_TODO_LIST:
      return state.slice(1);
    default:
      return state;
  }
};
