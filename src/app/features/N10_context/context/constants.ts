import faker from 'faker';

import {TodoContext} from './type';

export const initialState: TodoContext = {
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
