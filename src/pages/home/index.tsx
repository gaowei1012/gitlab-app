import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, RefreshControl, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '@/hooks/useStore';
import { observer } from 'mobx-react-lite';
import { Navigation, px2dp } from '@/utils';
import { homeStyle } from '@/styles';
import { Empty } from '@/components/Empty';

const Home: React.FC<{}> = observer(() => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [refreshBottom, setRefreshBottom] = useState<boolean>(false);

  const { projectStoreInstance } = useStore();

  useEffect(() => {
    (async () => {
      // const token = await StorageTools.getStorage('token');
      // if (token) {
      //   await projectStoreInstance.request_project_list();
      // } else {
      //   console.error('err');
      // }
      // console.log(token);
      // 获取所有项目
    })();
    getProjectList();
  }, []);

  const getProjectList = async () => {
    await projectStoreInstance.request_project_list();
  };

  const onMomentumScrollEnd = (event: { nativeEvent: { contentSize: { height: any }; layoutMeasurement: { height: any }; contentOffset: { y: any } } }) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;

    const isEndReached = scrollOffset + scrollViewHeight + 45 >= contentHeight; // 是否滑动到底部
    const isContentFillPage = contentHeight >= scrollViewHeight; // 内容高度是否大于列表高度

    if (isContentFillPage && isEndReached) {
      setRefreshBottom(true);
    }
  };

  // 用户上拉刷新手放开
  const onScrollEndDrag = () => {
    setTimeout(() => {
      setRefreshBottom(false);
    }, 300);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const ractivityIndicator = () => (
    <>
      {Platform.OS == 'ios' && (
        <View
          style={{
            position: 'absolute',
            bottom: px2dp(-80),
            width: '100%',
            alignItems: 'center',
          }}>
          <ActivityIndicator animating={true} size='large' />
          <Text style={{ color: '#999', fontSize: 12 }}>加载中...</Text>
        </View>
      )}
    </>
  );

  const handlePress = (item: any) => {
    Navigation.navigate('project_detail', { state: item.id });
  };

  return (
    <SafeAreaView style={homeStyle.wrap}>
      <ScrollView
        onScrollBeginDrag={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        refreshControl={<RefreshControl size={20} refreshing={refreshing} onRefresh={onRefresh} title='加载中...' titleColor='#999' progressBackgroundColor='lightblue' />}
        style={homeStyle.scrolview}>
        {projectStoreInstance.get_project_list_state().length != 0 ? (
          projectStoreInstance.get_project_list_state().map(item => (
            <TouchableOpacity key={item.id} onPress={() => handlePress(item)} activeOpacity={0.8} style={homeStyle.listItem}>
              <Text>{item.name_with_namespace}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Empty />
        )}

        {refreshBottom && ractivityIndicator()}
      </ScrollView>
    </SafeAreaView>
  );
});

export default Home;
