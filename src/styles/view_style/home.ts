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
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: px2dp(2),
    borderStyle: 'solid',
  },
});
