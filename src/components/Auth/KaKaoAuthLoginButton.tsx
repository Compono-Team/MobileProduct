import React from 'react';
import {View, Image} from 'react-native';

const KaKaoAuthLoginButton = () => {
  return (
    <View className="flex justify-center items-center w-[48px] h-[48px] bg-kakao rounded-full">
      <Image source={require('@/assets/images/auth/kakao-logo.png')} />
    </View>
  );
};

export default KaKaoAuthLoginButton;
