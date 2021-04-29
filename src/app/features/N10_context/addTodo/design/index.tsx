import React, {memo, useCallback, useContext, useState} from 'react';
import isEqual from 'react-fast-compare';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import faker from 'faker';

import {ADD_TODO_LIST} from '../../actionTypes';
import {todoContext} from '../../context';

const styles = StyleSheet.create({
  wrapInput: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  title: {
    width: 50,
  },
  input: {
    flex: 1,
    borderBottomWidth: 0.5,
  },
});

const AddTodoComponent = () => {
  // state
  const [task, setTask] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const {dispatch} = useContext(todoContext);

  // function
  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_TODO_LIST,
      payload: {
        id: faker.datatype.uuid(),
        task,
        time,
      },
    });
    setTask('');
    setTime('');
  }, [dispatch, task, time]);

  // render
  return (
    <ScrollView>
      <View style={[styles.wrapInput]}>
        <Text style={[styles.title]}>Task: </Text>
        <TextInput value={task} onChangeText={setTask} style={[styles.input]} />
      </View>
      <View style={[styles.wrapInput]}>
        <Text style={[styles.title]}>Số giờ: </Text>
        <TextInput
          value={time}
          onChangeText={setTime}
          style={[styles.input]}
          keyboardType={'numeric'}
        />
      </View>
      <Button title={'Thêm'} onPress={onSubmit} />
    </ScrollView>
  );
};

export const AddTodo = memo(AddTodoComponent, isEqual);
