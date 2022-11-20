import { Dimensions } from 'react-native';

const UIWidth = 375;

export const width = Dimensions.get('window').width;

export const height = Dimensions.get('window').height;

export const ScrenWidth = Dimensions.get('screen').width;

export const ScrenHeight = Dimensions.get('screen').height;

export const px2dp = (uiEleWidth: number) => {
  const width = Dimensions.get('window').width;
  return (uiEleWidth * width) / UIWidth;
};
