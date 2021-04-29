import {combineReducers, createStore} from 'redux';

import {todoListReducer} from '../reducer/reducer';

const allReducers = combineReducers({todoList: todoListReducer});

export type RootState = ReturnType<typeof allReducers>;

export const store = createStore(allReducers);
