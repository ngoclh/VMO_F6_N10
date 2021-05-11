import {ProductType} from '@model/N10_Saga';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingVertical: 15,
  },
});

interface ItemProductProps {
  product: ProductType;
}

const ItemProductComponent = ({product}: ItemProductProps) => {
  return (
    <View style={[styles.row]}>
      <Text>{product?.name ?? ''}</Text>
    </View>
  );
};

export const ItemProduct = memo(ItemProductComponent, isEqual);
