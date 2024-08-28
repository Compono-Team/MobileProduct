import React from 'react';
import {View, Image, Text} from 'react-native';

import KaKaoAuthButton from '@/components/AuthButton/KaKaoAuthButton';
import GoogleAuthButton from '@/components/AuthButton/GoogleAuthButton';
import AppleAuthButton from '@/components/AuthButton/AppleAuthButton';

export default function SignIn() {
  return (
    <View className="flex-1 justify-center items-center bg-black pt-20">
      <Image source={require('@/assets/images/logo.png')} className="h-20" />
      <View className="flex justify-center items-center mt-80">
        <Text className="text-white w-full">비로그인으로 시작하기</Text>
        <View className="flex-row justify-start gap-4 w-full mt-8">
          <KaKaoAuthButton />
          <GoogleAuthButton />
          <AppleAuthButton />
        </View>
      </View>
    </View>
  );
}
