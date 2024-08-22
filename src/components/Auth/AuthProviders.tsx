import React from 'react';
import {View, Text} from 'react-native';

import KaKaoOAuthLoginButton from './KaKaoOAuthLoginButton';
import GoogleOAuthLoginButton from './GoogleOAuthLoginButton';
import AppleOAuthLoginButton from './AppleOAuthLoginButton';

const AuthProviders = () => {
  return (
    <View className="flex justify-center items-center mt-80">
      <Text className="text-white w-full">비로그인으로 시작하기</Text>
      <View className="flex-row justify-start gap-4 w-full mt-8">
        <KaKaoOAuthLoginButton />
        <GoogleOAuthLoginButton />
        <AppleOAuthLoginButton />
      </View>
    </View>
  );
};

export default AuthProviders;
