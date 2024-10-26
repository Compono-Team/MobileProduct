import React from 'react';
import {ScrollView, View} from 'react-native';
import {DdayCard} from '@/components/dday-card/DdayCard';
import type {DdayListProps} from './types';

export const DdayList: React.FC<DdayListProps> = ({items}) => {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-[#121212] py-4"
    >
      {items.map((item, index) => (
        <View key={item.id} className={index !== 0 ? 'ml-2' : ''}>
          <DdayCard>
            <DdayCard.Badge color={item.color} dday={item.dday} />
            <DdayCard.Title>{item.title}</DdayCard.Title>
          </DdayCard>
        </View>
      ))}
    </ScrollView>
  );
};
