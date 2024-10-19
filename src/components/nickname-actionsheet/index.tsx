import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
} from '@/components/ui/actionsheet';

interface NicknameActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
}

const NicknameActionsheet: React.FC<NicknameActionsheetProps> = ({
  isOpen,
  onClose,
  nickname,
}) => {
  const router = useRouter();

  const handleEditProfile = () => {
    onClose();
    router.push({
      pathname: '/edit-profile',
      params: {initialNickname: nickname},
    });
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent className="bg-[#232324] rounded-t-3xl border-0 border-none">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator className="bg-gray-600" />
        </ActionsheetDragIndicatorWrapper>
        <View className="pt-2 pb-6 w-full">
          <Text className="text-base font-bold text-white">
            환영합니다 ✨{'\n'}
            해당 닉네임으로 시작할게요
          </Text>
          <View className="h-px bg-gray-700 my-6" />
          <Text className="text-sm text-white mb-5">
            해당 닉네임은 자동 생성된 닉네임으로{'\n'}이후 프로필 페이지에서
            변경할 수 있어요
          </Text>
          <TouchableOpacity
            onPress={handleEditProfile}
            className="bg-[#2F3030] rounded-lg mb-6 px-4 py-3">
            <Text className="text-[#6B6C6E] text-base">{nickname}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} className="w-full">
            <View className="w-full py-4 rounded-lg bg-white">
              <Text className="text-center font-bold text-base text-black">
                확인
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default NicknameActionsheet;
