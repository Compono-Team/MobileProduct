import React from 'react';
import {View, Image} from 'react-native';

import AuthProviders from '@/components/Auth/AuthProviders';

export default function SignIn() {
  return (
    <View className="flex-1 justify-center items-center bg-black pt-20">
      <Image source={require('@/assets/images/logo.png')} className="h-20" />
      <AuthProviders />
    </View>
  );
}
