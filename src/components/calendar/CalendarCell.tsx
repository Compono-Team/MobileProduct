import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CalendarCellProps} from './types';
import {formatDate} from './utils';

export const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  isSelected,
  onSelect,
}) => {
  const dayText = formatDate(date, 'E');
  const dayNumber = formatDate(date, 'd');

  return (
    <TouchableOpacity
      onPress={() => onSelect(date)}
      className={`flex-1 aspect-square justify-center items-center rounded ${
        isSelected ? 'bg-white' : 'bg-transparent'
      }`}>
      <DateText isSelected={isSelected} text={dayText} size="small" />
      <View>
        <DateText isSelected={isSelected} text={dayNumber} size="large" />
      </View>
    </TouchableOpacity>
  );
};

interface DateTextProps {
  isSelected: boolean;
  text: string;
  size: 'small' | 'large';
}

const DateText: React.FC<DateTextProps> = ({isSelected, text, size}) => {
  const textStyles = {
    small: 'text-[12px] font-light leading-[16.8px]',
    large: 'text-[16px] font-normal leading-[22.4px]',
  };

  return (
    <Text
      className={`${textStyles[size]} ${
        isSelected ? 'text-[#232324]' : 'text-white'
      }`}>
      {text}
    </Text>
  );
}; 