import React from 'react';
import { buttonStyle } from '@/styles';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, Platform } from 'react-native';

type ButtonProps = {
  btnText: string;
  onPress: () => void;
  customStyle?: any;
  customTextStyle?: any;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ btnText, onPress, customStyle, customTextStyle, disabled }) => {
  return (
    <React.Fragment>
      {Platform.OS == 'ios' ? (
        <TouchableOpacity disabled={disabled} style={[buttonStyle.buttonWrap, customStyle]} activeOpacity={0.8} onPress={() => onPress && onPress()}>
          <Text style={[buttonStyle.btnText, customTextStyle]}>{btnText}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
          <View style={[buttonStyle.buttonWrap, customStyle]}>
            <Text style={[buttonStyle.btnText, customTextStyle]}>{btnText}</Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </React.Fragment>
  );
};

export { Button };
