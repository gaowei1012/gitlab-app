import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { projectStyle } from '@/styles';
import moment from 'moment';

export const ArticleCom: React.FC<any> = props => {
  const { onPress, cover, title, item, views, createdAt, createdByName } = props;
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onPress(item)} style={projectStyle.annunciateItemWrap}>
      <Image style={projectStyle.Img} source={{ uri: cover }} />
      <View style={projectStyle.anunTitleWrap}>
        <View style={projectStyle.titleWrap}>
          <Text numberOfLines={2} ellipsizeMode='tail' style={[projectStyle.title, { fontSize: 16 }]}>
            {title}
          </Text>
        </View>
        <View style={projectStyle.itemDesc}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={projectStyle.author}>
            {createdByName}
          </Text>
          {views ? (
            <Text numberOfLines={1} ellipsizeMode='tail' style={projectStyle.quantity}>
              {views}阅读
            </Text>
          ) : null}
          <Text numberOfLines={1} ellipsizeMode='tail' style={projectStyle.turnover_time}>
            {/* {Utils.getDateDiff(createdAt)} */}
            {moment(createdAt).from(moment())}
            {/* 分钟前 */}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
