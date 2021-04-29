import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import faker from 'faker';

import {ADD_TODO_LIST} from '../../reducer/actionTypes';
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
  const dispatch = useDispatch();

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

export const AddTodoRX = memo(AddTodoComponent, isEqual);
