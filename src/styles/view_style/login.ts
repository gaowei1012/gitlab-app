import { StyleSheet } from 'react-native';
import { DEFAULT_STYLES } from '@/config/default';
import { px2dp } from '@/utils';

const { DEFAULT_BTN_COLOR } = DEFAULT_STYLES;

export const loginStyle = StyleSheet.create({
  container: {
    paddingTop: px2dp(60),
  },
  loginLog: {
    width: px2dp(160),
    height: px2dp(160),
  },
  loginTextinputWrap: {
    width: px2dp(320),
    marginTop: px2dp(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: px2dp(10),
    paddingLeft: px2dp(2),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(1),
  },
  text: {
    fontSize: px2dp(16),
  },
  textInput: {
    paddingLeft: px2dp(8),
  },

  loginLogo: {
    width: px2dp(78),
    height: px2dp(78),
    borderRadius: px2dp(6),
    backgroundColor: '#E95F2C',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: px2dp(30),
    marginTop: px2dp(25),
  },
  logoImg: {
    width: px2dp(78),
    height: px2dp(78),
    borderRadius: px2dp(6),
  },
  loginTitle: {
    fontSize: px2dp(26),
    color: '#333',
    marginHorizontal: px2dp(30),
    marginVertical: px2dp(25),
  },
  loginBtn: {
    marginTop: px2dp(63),
  },
  loginBtnAction: {
    backgroundColor: DEFAULT_BTN_COLOR,
  },
});
