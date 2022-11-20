import { px2dp } from '@/utils';
import { StyleSheet } from 'react-native';
import { globalStyles } from '@/config/global';
import { DEFAULT_STYLES } from '@/config/default';
const { flexRowItems, alignSelfCenter, flexRowJustifyCenter } = globalStyles;
const { DEFAULT_BACKGROUND_COLOR, DEFAULT_ESSSENTIAL_COLOR, SECONDARY_COLOR } = DEFAULT_STYLES;

export const projectStyle = StyleSheet.create({
  annunciateItemWrap: {
    width: px2dp(351),
    height: px2dp(118),
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    ...flexRowItems,
    ...alignSelfCenter,
    paddingHorizontal: px2dp(12),
    marginTop: px2dp(7),
    borderRadius: px2dp(6),
  },
  Img: {
    width: px2dp(90),
    height: px2dp(90),
    borderRadius: px2dp(3),
  },
  anunTitleWrap: {
    marginLeft: px2dp(12),
  },
  titleWrap: {
    height: px2dp(66),
  },
  title: {
    color: DEFAULT_ESSSENTIAL_COLOR,
    lineHeight: px2dp(24),
    width: px2dp(224),
  },
  itemDesc: {
    // marginTop: px2dp(26),
    ...flexRowJustifyCenter,
  },
  author: {
    color: SECONDARY_COLOR,
    width: px2dp(70),
    marginRight: px2dp(28),
  },
  quantity: {
    color: SECONDARY_COLOR,
    width: px2dp(62),
    marginRight: px2dp(12),
  },
  turnover_time: {
    color: SECONDARY_COLOR,
  },
});
