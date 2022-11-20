import { StyleSheet } from 'react-native';
import { DEFAULT_STYLES } from '@/config/default';
import { globalStyles } from '@/config/global';
import { px2dp } from '@/utils';

const { DEFAULT_INPUT_BG_COLOR, DEFAULT_INPUT_TEXT_COLOR } = DEFAULT_STYLES;
const { alignSelfCenter, flexRowJustifyCenter, flexStartItemCenter } = globalStyles;

export const textInputStyle = StyleSheet.create({
  textInputWrap: {
    width: px2dp(327),
    height: px2dp(58),
    borderRadius: px2dp(30),
    backgroundColor: DEFAULT_INPUT_BG_COLOR,
    ...alignSelfCenter,
    marginBottom: px2dp(15),
    ...flexRowJustifyCenter,
  },
  leftWrap: {
    ...flexStartItemCenter,
    width: px2dp(200),
  },
  rightWrap: {
    marginRight: px2dp(20),
  },
  btnText: {
    fontSize: px2dp(20),
    color: DEFAULT_INPUT_TEXT_COLOR,
    fontWeight: '500',
  },
  image: {
    width: px2dp(28),
    height: px2dp(28),
    marginLeft: px2dp(20),
    marginRight: px2dp(17),
  },
});
