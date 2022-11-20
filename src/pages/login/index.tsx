import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputBase } from '@/components/TextIput';
import { Button } from '@/components/Button';
import { Navigation } from '@/utils';
import { loginStyle } from '@/styles';

const Login: React.FC<{}> = () => {
  const [disabled, setDiabled] = useState<boolean>(false);

  const changeTextInputVal = async (val: string) => {
    // await StorageTools.setStorage('token', val);
  };

  // 保存
  const saveToken = () => Navigation.navigate('home');

  return (
    <SafeAreaView>
      <View style={loginStyle.container}>
        {/* <Image style={loginStyle.loginLog} source={require('../../assets/gitlab.png')} /> */}
        <View style={loginStyle.loginLogo}>
          <Image style={loginStyle.logoImg} source={require('../../assets/gitlab.png')} />
        </View>
        <Text style={loginStyle.loginTitle}>访问令牌</Text>
        <View style={{ marginTop: 20 }}>
          <TextInputBase onBlur={() => setDiabled(!disabled)} placeholder='请输入访问令牌' returnKeyType={'done'} onChangeText={text => changeTextInputVal(text)} />
        </View>
        <Button btnText='登录' customStyle={[!disabled ? loginStyle.loginBtnAction : '', loginStyle.loginBtn]} onPress={() => saveToken()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
