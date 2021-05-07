import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {
  APP_SCREEN,
  RootStackParamList,
} from '../../../../navigation/screenTypes';

import {ItemView} from './components/ItemView';

type AnimatedDemoProps = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.DA_ANIMATED
>;

const AnimatedDemoComponent = ({navigation, route}: AnimatedDemoProps) => {
  // state
  const [listData] = useState<Array<number>>([1, 2, 3, 4, 5]);

  // function
  const renderItem = useCallback(({item}: ListRenderItemInfo<number>) => {
    return <ItemView item={item} />;
  }, []);

  const kexExtractor = useCallback((item: number) => {
    return item.toString();
  }, []);
  // render
  return (
    <View>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={kexExtractor}
      />
    </View>
  );
};

export const AnimatedDemo = memo(AnimatedDemoComponent, isEqual);
