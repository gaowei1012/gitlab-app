import { StyleSheet } from 'react-native';
import { px2dp } from '@/utils';

export const loadingStyles = StyleSheet.create({
  loding_mask: {
    backgroundColor: '#00000073',
    position: 'absolute',
    bottom: '46%',
    width: px2dp(120),
    height: px2dp(120),
    borderRadius: px2dp(6),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 9999,
  },
});
