import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import { Navigation } from '@/utils';

const ProjectDetail = observer(() => {
  const navigate = Navigation.getRouteParams();
  console.log('navigate=>', navigate);

  const { projectInstance } = useStore();

  return (
    <SafeAreaView>
      <Text>项目详情</Text>
    </SafeAreaView>
  );
});

export default ProjectDetail;
