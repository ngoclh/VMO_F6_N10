import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 10,
  },
});

interface RowInfoProps {
  title: string;
  value: string;
}

const RowInfoComponent = ({title, value}: RowInfoProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}: </Text>
      <Text style={[styles.content]}>{value}</Text>
    </View>
  );
};

export const RowInfo = memo(RowInfoComponent, isEqual);
