import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Products} from '../../../../../model/N10_navigation';
import {SIZE_IMAGE} from '../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: SIZE_IMAGE,
    height: SIZE_IMAGE,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  category: {
    flex: 1,
    fontWeight: 'bold',
  },
  name: {
    flex: 3,
    opacity: 0.8,
  },
  wrapDate: {
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: 'rgba(0,0,0,0.6)',
  },
});

interface ItemProductProps {
  product: Products;
  onItemPress?: (product: Products) => void;
}

const ItemProductComponent = ({product, onItemPress}: ItemProductProps) => {
  // function
  const onPress = useCallback(() => {
    if (onItemPress && typeof onItemPress === 'function') {
      onItemPress(product);
    }
  }, [onItemPress, product]);

  // render
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <FastImage
          style={[styles.image]}
          resizeMode={'cover'}
          source={{uri: product.image}}
        />
        <View style={[styles.content]}>
          <Text style={[styles.category]}>{product.category}</Text>
          <Text style={[styles.name]}>{product.name}</Text>
        </View>
        <View style={[styles.wrapDate]}>
          <Text style={[styles.date]}>{product.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ItemProduct = memo(ItemProductComponent, isEqual);
