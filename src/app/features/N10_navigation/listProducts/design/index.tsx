import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';

import {Products} from '../../../../model/N10_navigation';
import {navigate} from '../../../../navigation/navigationService';
import {APP_SCREEN} from '../../../../navigation/screenTypes';

import {ItemProduct} from './components/ItemProduct';
import {listData} from './constants';
const styles = StyleSheet.create({
  spacer: {
    height: 10,
  },
  content: {
    padding: 5,
  },
});

const ListProductsComponent = () => {
  // state
  const [data] = useState<Array<Products>>(listData);
  // function
  const onItemPress = useCallback((product: Products) => {
    navigate(APP_SCREEN.DETAIL_PRODUCT, {product});
  }, []);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Products>) => {
      return <ItemProduct product={item} onItemPress={onItemPress} />;
    },
    [onItemPress],
  );

  const keyExtractor = useCallback((item: Products) => {
    return item.id;
  }, []);

  const renderItemSeparatorComponent = useCallback(() => {
    return <View style={[styles.spacer]} />;
  }, []);

  // render
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderItemSeparatorComponent}
      contentContainerStyle={[styles.content]}
    />
  );
};

export const ListProducts = memo(ListProductsComponent, isEqual);
