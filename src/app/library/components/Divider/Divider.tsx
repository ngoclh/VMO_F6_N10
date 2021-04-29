import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {DividerProps} from './DividerProps';

const DividerComponent = ({color = '#bbb', height = 1}: DividerProps) => {
  // state
  const style = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: '100%',
      height: StyleSheet.hairlineWidth * height,
      backgroundColor: color,
    }),
    [color, height],
  );
  // render
  return <View style={[style]} />;
};

export const Divider = memo(DividerComponent, isEqual);
