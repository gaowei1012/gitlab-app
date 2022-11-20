import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { loadingStyles } from '@/styles/components/loading';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

export const Loading: React.FC<any> = observer(() => {
  const { loadingInstance } = useStore();
  return (
    <View style={[loadingStyles.loding_mask, { display: loadingInstance.show }]}>
      <ActivityIndicator size='large' color='#fff' />
    </View>
  );
});
