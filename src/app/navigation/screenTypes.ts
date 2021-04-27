import {Products} from '../model/N10_navigation';

export enum APP_SCREEN {
  DEMO_NAVIGATION = 'DEMO_NAVIGATION',
  LIST_PRODUCTS = 'LIST_PRODUCTS',
  DETAIL_PRODUCT = 'DETAIL_PRODUCT',
}

export type RootStackParamList = {
  [APP_SCREEN.DEMO_NAVIGATION]: undefined;
  [APP_SCREEN.LIST_PRODUCTS]: undefined;
  [APP_SCREEN.DETAIL_PRODUCT]: {product: Products};
};
