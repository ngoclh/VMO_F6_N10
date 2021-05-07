import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {CONTINUE_INCREMENT, INCREMENT} from '../reducer/actionTypes';

const IncrementComponent = () => {
  // state
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);

  // function
  const onIncrement = useCallback(() => {
    dispatch({
      type: INCREMENT,
      payload: {
        onSetNewValue: () => {
          setCount(c => c + 1);
        },
      },
    });
  }, [dispatch]);

  const onContinue = useCallback(() => {
    dispatch({
      type: CONTINUE_INCREMENT,
    });
  }, [dispatch]);

  // render
  return (
    <View>
      <Text>Đây là increment: {count}</Text>
      <Button title={'Increment'} onPress={onIncrement} />
      <Button title={'Continue'} onPress={onContinue} />
    </View>
  );
};

export const Increment = memo(IncrementComponent, isEqual);
