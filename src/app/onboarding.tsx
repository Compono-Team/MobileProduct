import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import NicknameActionsheet from '@/components/nickname-actionsheet';

const Onboarding = () => {
  const [isActionsheetOpen, setIsActionsheetOpen] = useState(false);
  const [nickname, setNickname] = useState('무지개 123');
  const router = useRouter();
  const params = useLocalSearchParams();

  const handleActionsheetClose = () => {
    setIsActionsheetOpen(false);
    router.push('/');
  };

  useEffect(() => {
    if (params.updatedNickname) {
      setNickname(params.updatedNickname as string);
    }
  }, [params]);

  useEffect(() => {
    setIsActionsheetOpen(true);
  }, []);

  return (
    <View className="flex-1 bg-black p-5 justify-center">
      <NicknameActionsheet
        isOpen={isActionsheetOpen}
        onClose={handleActionsheetClose}
        nickname={nickname}
      />
    </View>
  );
};

export default Onboarding;
