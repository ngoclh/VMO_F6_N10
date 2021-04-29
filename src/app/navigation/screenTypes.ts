import {Products} from '../model/N10_navigation';

export enum APP_SCREEN {
  DEMO_NAVIGATION = 'DEMO_NAVIGATION',
  LIST_PRODUCTS = 'LIST_PRODUCTS',
  DETAIL_PRODUCT = 'DETAIL_PRODUCT',

  DEMO_CONTEXT = 'DEMO_CONTEXT',
  DC_TODO_LIST = 'DC_TODO_LIST',
  DC_ADD_TOTO = 'DC_ADD_TOTO',

  DEMO_REDUX = 'DEMO_REDUX',
  DR_TODO_LIST = 'DR_TODO_LIST',
  DR_ADD_TOTO = 'DR_ADD_TOTO',
}

export type RootStackParamList = {
  [APP_SCREEN.DEMO_NAVIGATION]: undefined;
  [APP_SCREEN.LIST_PRODUCTS]: undefined;
  [APP_SCREEN.DETAIL_PRODUCT]: {product: Products};

  [APP_SCREEN.DEMO_CONTEXT]: undefined;
  [APP_SCREEN.DC_TODO_LIST]: undefined;
  [APP_SCREEN.DC_ADD_TOTO]: undefined;

  [APP_SCREEN.DEMO_REDUX]: undefined;
  [APP_SCREEN.DR_TODO_LIST]: undefined;
  [APP_SCREEN.DR_ADD_TOTO]: undefined;
};
