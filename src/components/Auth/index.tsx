import React from 'react';
import {View, Text} from 'react-native';

import AppleAuthLoginButton from './AppleAuthLoginButton';

const Auth = () => {
  return (
    <View className="flex justify-center items-center mt-80">
      <Text className="text-white w-full">비로그인으로 시작하기</Text>
      <View className="flex-row justify-between w-full mt-8">
        <AppleAuthLoginButton />
      </View>
    </View>
  );
};

export default Auth;
