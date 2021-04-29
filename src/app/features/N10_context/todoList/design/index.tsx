import {StackScreenProps} from '@react-navigation/stack';
import faker from 'faker';
import React, {memo, useCallback, useContext, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Divider} from '../../../../library/components/Divider/Divider';
import {Icon} from '../../../../library/components/Icon/Icon';
import {Todo} from '../../../../model/N10_context';
import {navigate} from '../../../../navigation/navigationService';
import {
  APP_SCREEN,
  RootStackParamList,
} from '../../../../navigation/screenTypes';
import {REMOVE_TODO_LIST} from '../../actionTypes';
import {todoContext} from '../../context';

import {ItemTodo} from './components/ItemTodo';

const styles = StyleSheet.create({
  wrapIcon: {
    padding: 10,
  },
});

type TodoListProps = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.DC_TODO_LIST
>;

const TodoListComponent = ({navigation}: TodoListProps) => {
  // state
  const {store, dispatch} = useContext(todoContext);
  // function
  const onAddTodo = useCallback(() => {
    navigate(APP_SCREEN.DC_ADD_TOTO);
  }, []);

  const onRemove = useCallback(() => {
    dispatch({
      type: REMOVE_TODO_LIST,
    });
  }, [dispatch]);

  const renderHeadRight = useCallback(() => {
    return (
      <TouchableOpacity onPress={onAddTodo}>
        <View style={[styles.wrapIcon]}>
          <Icon source={'plus'} />
        </View>
      </TouchableOpacity>
    );
  }, [onAddTodo]);

  const renderHeadLeft = useCallback(() => {
    return (
      <TouchableOpacity onPress={onRemove}>
        <Text>Remove</Text>
      </TouchableOpacity>
    );
  }, [onRemove]);

  const keyExtractor = useCallback((item: Todo) => {
    return item.id;
  }, []);

  const renderItem = useCallback(({item}: ListRenderItemInfo<Todo>) => {
    return <ItemTodo todo={item} />;
  }, []);

  const renderSpacer = useCallback(() => {
    return <Divider />;
  }, []);

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerRight: renderHeadRight,
      headerLeft: renderHeadLeft,
    });
  }, []);

  // render
  return (
    <FlatList
      data={store.todoList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSpacer}
    />
  );
};

export const TodoList = memo(TodoListComponent, isEqual);
