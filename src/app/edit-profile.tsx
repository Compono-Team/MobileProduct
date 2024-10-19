import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useRouter, useNavigation, useLocalSearchParams} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

const EditProfile = () => {
  const params = useLocalSearchParams();
  const [nickname, setNickname] = useState(
    (params.initialNickname as string) || '',
  );
  const [initialNickname, setInitialNickname] = useState(
    (params.initialNickname as string) || '',
  );
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    setInitialNickname((params.initialNickname as string) || '');
  }, [params.initialNickname]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '프로필 편집',
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, router]);

  const handleGoBack = () => {
    router.replace('/onboarding');
  };

  const handleConfirm = () => {
    router.replace({
      pathname: '/onboarding',
      params: {updatedNickname: nickname},
    });
  };

  const isNicknameChanged =
    nickname !== initialNickname && nickname.trim() !== '';

  return (
    <View className="flex-1 p-5 bg-[#191919]">
      <View className="items-center mb-10 mt-5">
        <View className="w-24 h-24 rounded-full bg-[#232324]" />
      </View>

      <View className="bg-[#232324] rounded-lg mb-5">
        <TextInput
          className="text-white p-4 text-base"
          placeholder="닉네임을 입력해주세요"
          placeholderTextColor="#6B6C6E"
          value={nickname}
          onChangeText={setNickname}
        />
      </View>

      <TouchableOpacity
        className={`p-4 rounded-lg items-center ${
          isNicknameChanged ? 'bg-white' : 'bg-[#2F3030]'
        }`}
        onPress={handleConfirm}
        disabled={!isNicknameChanged}>
        <Text
          className={`text-base font-bold ${
            isNicknameChanged ? 'text-black' : 'text-[#6B6C6E]'
          }`}>
          완료하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
