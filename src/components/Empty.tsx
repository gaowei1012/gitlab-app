import React from 'react';
import { px2dp } from '@/utils';
import { ActivityIndicator, View } from 'react-native';

export const Empty: React.FC<{}> = () => (
  <View style={{ alignItems: 'center', height: px2dp(300), justifyContent: 'center' }}>
    <ActivityIndicator size='large' />
  </View>
);
