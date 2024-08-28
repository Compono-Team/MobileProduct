import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {login} from '@react-native-kakao/user';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {router} from 'expo-router';

import {useSession} from '@/context/sessionContext';

const KaKaoAuthButton = () => {
  const {signIn} = useSession();

  const onKaKaoLoginPress = () => {
    try {
      const userInfo = login();
      console.log(userInfo);
      signIn();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeKakaoSDK('f33b4b02431fe06cb3f8df2cca7be84a');
  }, []);

  return (
    <TouchableOpacity
      className="flex justify-center items-center w-[48px] h-[48px] bg-kakao rounded-full"
      onPress={onKaKaoLoginPress}>
      <Image source={require('@/assets/images/auth/kakao-logo.png')} />
    </TouchableOpacity>
  );
};

export default KaKaoAuthButton;
