import React from 'react';
import {View, Text, Image} from 'react-native';

import Auth from '../components/Auth';

const SignIn = () => {
  return (
    <View className="flex items-center justify-center bg-black pt-[192px]">
      <Image
        source={require('../assets/images/logo.png')}
        className="h-[92px]"
      />
      <Text className="pt-[318px] text-gray-400">비로그인으로 시작하기</Text>
      <Auth />
    </View>
  );
};

export default SignIn;
