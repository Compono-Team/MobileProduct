import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {router} from 'expo-router';
import logo from '@/assets/images/logo.png';
import KaKaoAuthButton from '@/components/auth-button/kakao-auth-button';
import GoogleAuthButton from '@/components/auth-button/google-auth-button';
import AppleAuthButton from '@/components/auth-button/apple-auth-button';
import TermsActionsheet from '@/components/terms-actionsheet';

export default function SignIn() {
  const [isActionsheetOpen, setIsActionsheetOpen] = useState(false);

  const openActionsheet = () => setIsActionsheetOpen(true);
  const closeActionsheet = () => {
    setIsActionsheetOpen(false);
    router.push('/onboarding');
  };

  return (
    <View className="flex-1 justify-center items-center bg-black pt-20">
      <Image source={logo} className="w-[120px]" />
      <View className="flex justify-center items-center mt-12">
        <View className="flex flex-row items-center gap-4 w-full mt-8">
          <KaKaoAuthButton />
          <GoogleAuthButton />
          <AppleAuthButton />
        </View>
      </View>
      <View className="flex-row justify-center mt-8">
        <TouchableOpacity>
          <Text className="text-white">계정찾기</Text>
        </TouchableOpacity>
        <Text className="text-white mx-2">|</Text>
        <TouchableOpacity>
          <Text className="text-white">문의하기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={openActionsheet}>
        <Text className="text-gray-400 mt-40">
          비로그인으로 시작하기 (보기를)
        </Text>
      </TouchableOpacity>

      <TermsActionsheet isOpen={isActionsheetOpen} onClose={closeActionsheet} />
    </View>
  );
}
