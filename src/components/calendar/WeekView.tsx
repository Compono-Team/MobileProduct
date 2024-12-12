import React from 'react';
import {View} from 'react-native';
import {WeekViewProps} from './types';
import {CalendarCell} from './CalendarCell';
import {isSameDate} from './utils';

export const WeekView: React.FC<WeekViewProps> = ({
  dates,
  selectedDate,
  onDateSelect,
}) => {
  return (
    <View className="flex-row items-start justify-between w-full">
      {dates.map((item, index) => (
        <CalendarCell
          key={index}
          date={item.date}
          isSelected={isSameDate(selectedDate, item.date)}
          onSelect={onDateSelect}
        />
      ))}
    </View>
  );
};
