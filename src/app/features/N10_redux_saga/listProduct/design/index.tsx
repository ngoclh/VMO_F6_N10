import {ProductType} from '@model/N10_Saga';
import React, {memo, useCallback, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import {GET_LIST_PRODUCTS} from '../reducer/actionTypes';

import {ItemProduct} from './components/ItemProduct';

const ListProductComponent = () => {
  // state
  const dispatch = useDispatch();
  const [data, setData] = useState<Array<ProductType>>([]);

  // function
  const keyExtractor = useCallback((item: ProductType) => item.guid, []);
  const renderItem = useCallback(({item}: ListRenderItemInfo<ProductType>) => {
    return <ItemProduct product={item} />;
  }, []);

  // effect
  useEffect(() => {
    dispatch({
      type: GET_LIST_PRODUCTS,
      payload: {
        url: 'http://localhost:3000/products',
        setData: setData,
      },
    });
  }, []);

  // render
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export const ListProduct = memo(ListProductComponent, isEqual);
