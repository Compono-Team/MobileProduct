import React from 'react';
import {View, Text, Image} from 'react-native';

import Auth from '../components/Auth';

export default function SignIn() {
  return (
    <View className="flex-1 justify-center items-center bg-black pt-20">
      <Image
        source={require('../../assets/images/logo.png')}
        className="h-20"
      />
      <Auth />
    </View>
  );
}
