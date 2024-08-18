import React from 'react';
import {View, Text} from 'react-native';

import AppleAuthLoginButton from './AppleAuthLoginButton';
import GoogleAuthLoginButton from './GoogleAuthLoginButton';
import KaKaoAuthLoginButton from './KaKaoAuthLoginButton';

const Auth = () => {
  return (
    <View className="flex justify-center items-center mt-80">
      <Text className="text-white w-full">비로그인으로 시작하기</Text>
      <View className="flex-row justify-start gap-4 w-full mt-8">
        <KaKaoAuthLoginButton />
        <GoogleAuthLoginButton />
        <AppleAuthLoginButton />
      </View>
    </View>
  );
};

export default Auth;
