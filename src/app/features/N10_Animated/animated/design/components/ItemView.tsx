import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderWidth: 0.5,
    backgroundColor: 'green',
  },
  button: {
    position: 'absolute',
    right: 0,
    height: '100%',
    backgroundColor: 'red',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ItemViewProps {
  item: number;
}

const ItemViewComponent = ({item}: ItemViewProps) => {
  // state
  const translateX = useSharedValue(0);

  // function
  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onFinish: () => {
      //   translateX.value = withTiming(0);
    },
  });

  // reanimated style
  const rowStyle = useAnimatedStyle(() => ({
    backgroundColor: '#ffffff',
    flex: 1,
    transform: [{translateX: translateX.value}],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(translateX.value, [0, -150], [1, 1.5]),
      },
    ],
  }));

  // render
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, buttonStyle]}>
        <Text>button</Text>
      </Animated.View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[rowStyle]}>
          <Text>{item}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export const ItemView = memo(ItemViewComponent, isEqual);
