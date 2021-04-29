import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';

import {icons} from '../../../assets/icon';

import {IconProps} from './IconProps';

const DEFAULT_SIZE = 24;
const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
});
const IconComponent = ({
  source,
  color,
  resizeMode = 'cover',
  size = DEFAULT_SIZE,
}: IconProps) => {
  // state
  const iconStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );
  // render
  return (
    <View style={[iconStyle]}>
      <FastImage
        style={[styles.imageStyle]}
        source={icons[source]}
        resizeMode={resizeMode}
        tintColor={color}
      />
    </View>
  );
};

export const Icon = memo(IconComponent, isEqual);
