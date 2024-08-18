import React from 'react';
import {View, Image} from 'react-native';

const GoogleAuthLoginButton = () => {
  return (
    <View className="flex justify-center items-center w-[48px] h-[48px] bg-white rounded-full">
      <Image source={require('../../../assets/images/auth/google-logo.png')} />
    </View>
  );
};

export default GoogleAuthLoginButton;
