import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

import {Todo} from '../../../../../model/N10_context';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  spacer: {
    height: 10,
  },
});

interface ItemTodoProps {
  todo: Todo;
}

const ItemTodoComponent = ({todo}: ItemTodoProps) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.row]}>
        <Text style={[styles.title]}>Task: </Text>
        <Text>{todo?.task ?? ''}</Text>
      </View>
      <View style={[styles.spacer]} />
      <View style={[styles.row]}>
        <Text style={[styles.title]}>Thời gian: </Text>
        <Text>{todo?.time ?? ''}h</Text>
      </View>
    </View>
  );
};

export const ItemTodo = memo(ItemTodoComponent, isEqual);
