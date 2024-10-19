import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';

interface TermsActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsActionsheet: React.FC<TermsActionsheetProps> = ({
  isOpen,
  onClose,
}) => {
  const [agreements, setAgreements] = useState({
    all: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const toggleAgreement = (key: keyof typeof agreements) => {
    if (key === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        all: newValue,
        service: newValue,
        privacy: newValue,
        marketing: newValue,
      });
    } else {
      setAgreements(prev => {
        const newAgreements = {...prev, [key]: !prev[key]};
        const allChecked = Object.values(newAgreements).every(v => v);
        return {...newAgreements, all: allChecked};
      });
    }
  };

  const Checkbox = ({checked}: {checked: boolean}) => (
    <View
      className={`w-4 h-4 border ${
        checked ? 'border-white' : 'border-gray-400'
      } rounded mr-3 items-center justify-center`}>
      {checked && <View className="w-2 h-2 bg-white"></View>}
    </View>
  );

  const AgreementItem = ({
    checked,
    onToggle,
    text,
    isRequired,
  }: {
    checked: boolean;
    onToggle: () => void;
    text: string;
    isRequired: boolean;
  }) => (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center py-3">
      <Checkbox checked={checked} />
      <ActionsheetItemText
        className={`${
          checked ? 'text-white' : 'text-gray-400'
        } text-sm flex-1`}>
        {isRequired ? '(필수) ' : '(선택) '}
        {text}
      </ActionsheetItemText>
      <Text className="text-white text-sm">보기</Text>
    </TouchableOpacity>
  );

  const isAllRequiredChecked = agreements.service && agreements.privacy;

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent className="bg-[#232324] rounded-t-3xl border-0 border-none">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator className="bg-gray-600" />
        </ActionsheetDragIndicatorWrapper>
        <View className="pt-2 pb-6 w-full">
          <Text className="text-lg font-bold mb-4 text-white">
            약관에 동의해 주세요
          </Text>
          <TouchableOpacity
            onPress={() => toggleAgreement('all')}
            className="flex-row items-center py-3">
            <Checkbox checked={agreements.all} />
            <ActionsheetItemText
              className={`${
                agreements.all ? 'text-white' : 'text-gray-400'
              } text-base font-semibold`}>
              모두 동의
            </ActionsheetItemText>
          </TouchableOpacity>
          <View className="h-px bg-gray-700 my-2" />
          <AgreementItem
            checked={agreements.service}
            onToggle={() => toggleAgreement('service')}
            text="서비스 이용 약관 동의"
            isRequired={true}
          />
          <AgreementItem
            checked={agreements.privacy}
            onToggle={() => toggleAgreement('privacy')}
            text="개인 정보 수집 및 이용 동의"
            isRequired={true}
          />
          <AgreementItem
            checked={agreements.marketing}
            onToggle={() => toggleAgreement('marketing')}
            text="마케팅 정보 수신 동의"
            isRequired={false}
          />
        </View>
        <TouchableOpacity
          onPress={onClose}
          className={`w-full mt-4 pb-4 ${
            isAllRequiredChecked ? 'opacity-100' : 'opacity-50'
          }`}
          disabled={!isAllRequiredChecked}>
          <View
            className={`w-full py-4 rounded-lg ${
              isAllRequiredChecked ? 'bg-white' : 'bg-[#2F3030]'
            }`}>
            <Text
              className={`text-center font-bold text-base ${
                isAllRequiredChecked ? 'text-black' : 'text-[#6B6C6E]'
              }`}>
              확인
            </Text>
          </View>
        </TouchableOpacity>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default TermsActionsheet;
