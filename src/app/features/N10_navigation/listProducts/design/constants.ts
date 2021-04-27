/* eslint-disable max-len */
import faker from 'faker';

import {shuffle} from '../../../../common';
import {Products} from '../../../../model/N10_navigation';

export const SIZE_IMAGE = 80;

export const listData: Array<Products> = shuffle([
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    date: faker.datatype.datetime().getFullYear(),
    category: faker.commerce.product(),
    image:
      'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
]);
