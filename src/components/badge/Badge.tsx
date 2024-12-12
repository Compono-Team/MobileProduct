import React from 'react';
import {View, Text} from 'react-native';
import type {BadgeColor} from '@/types/badge';

interface BadgeProps {
  color: BadgeColor;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({color, children}) => {
  return (
    <View
      className="rounded-full justify-center items-center w-[40px] h-[20px]"
      style={{backgroundColor: color}}
    >
      <Text 
        className="text-white text-[10px] font-normal leading-[14px] font-['Montserrat']"
      >
        {children}
      </Text>
    </View>
  );
};

export {Badge};
export type {BadgeColor};
