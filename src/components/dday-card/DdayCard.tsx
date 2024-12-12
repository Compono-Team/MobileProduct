import React from 'react';
import {View, Text} from 'react-native';
import {Badge} from '../badge/Badge';
import type {DdayCardProps, DdayCardComposition} from './types';

const DdayCard: React.FC<DdayCardProps> & DdayCardComposition = ({children}) => {
  return (
    <View 
      className="flex-row items-center px-2.5 py-3 bg-[#2F30304D] rounded-[4px] border border-[#26272799] w-[190px] h-[44px] gap-[10px]"
    >
      {children}
    </View>
  );
};

const DdayBadge: React.FC<{color: BadgeColor; dday: string}> = ({color, dday}) => (
  <Badge color={color}>{dday}</Badge>
);

const Title: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Text 
    className="text-[#F5F7FA] text-[13px] font-light leading-[18.2px] font-['Pretendard']"
  >
    {children}
  </Text>
);

DdayCard.Badge = DdayBadge;
DdayCard.Title = Title;

export {DdayCard};
