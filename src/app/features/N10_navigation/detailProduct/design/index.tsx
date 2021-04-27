import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Products} from '../../../../model/N10_navigation';
import {
  APP_SCREEN,
  RootStackParamList,
} from '../../../../navigation/screenTypes';

import {RowInfo} from './components/RowInfo';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

type DetailProductProps = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.DETAIL_PRODUCT
>;
const DetailProductComponent = ({route}: DetailProductProps) => {
  // state
  const product = useMemo<Products>(() => route.params?.product ?? {}, [route]);
  // render
  return (
    <View>
      <FastImage
        source={{uri: product.image}}
        resizeMode={'cover'}
        style={[styles.image]}
      />
      <RowInfo title={'Name'} value={product?.name ?? ''} />
      <RowInfo title={'Category'} value={product?.category ?? ''} />
      <RowInfo title={'Date'} value={product?.date ?? ''} />
    </View>
  );
};

export const DetailProduct = memo(DetailProductComponent, isEqual);
