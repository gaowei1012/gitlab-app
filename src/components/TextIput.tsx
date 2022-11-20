import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { textInputStyle } from '@/styles/components/textinput';

interface TextInputBasePorps extends TextInputProps {}

export const TextInputBase: React.FC<TextInputBasePorps> = props => {
  return (
    <View style={textInputStyle.textInputWrap}>
      <View style={textInputStyle.leftWrap}>
        {/* <Image style={textInputStyle.image} source={imgUrl} /> */}
        <TextInput {...props} placeholderTextColor='#6D7278' style={{ fontSize: 16, width: 320, paddingLeft: 20 }} />
      </View>
    </View>
  );
};
