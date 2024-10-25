import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface TabButtonProps {
  label: string;
  onPress: () => void;
  isFocused: boolean;
  Icon: React.FC<SvgProps>;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  onPress,
  isFocused,
  Icon,
}) => (
  <TouchableOpacity onPress={onPress} className="items-center gap-1">
    <Icon
      width={24}
      height={24}
      fill={isFocused ? '#D7D8DB' : '#4B4B4C'}
      color={isFocused ? '#D7D8DB' : '#4B4B4C'}
    />
    <Text
      className={`${isFocused ? 'text-[#D7D8DB]' : 'text-[#4B4B4C]'} text-xs`}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default TabButton;
