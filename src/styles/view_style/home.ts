import { px2dp } from '@/utils';
import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  scrolview: {
    flex: 1,
  },
  listItem: {
    marginHorizontal: px2dp(8),
    paddingVertical: px2dp(16),
    borderBottomColor: '#333',
    borderBottomWidth: px2dp(1),
    borderStyle: 'solid',
  },
});
