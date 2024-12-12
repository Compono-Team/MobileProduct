import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BlurView} from 'expo-blur';
import type {TimelineEvent, TimelineProps} from './types';

const Timeline: React.FC<TimelineProps> = ({events}) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getEventPosition = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return ((hours + minutes / 60) / 24) * 100;
  };

  const getEventWidth = (start: string, end: string) => {
    return getEventPosition(end) - getEventPosition(start);
  };

  const renderEvent = (event: TimelineEvent) => {
    const startPosition = getEventPosition(event.startTime);
    const width = getEventWidth(event.startTime, event.endTime);

    return (
      <TouchableOpacity
        key={event.id}
        className={`absolute h-full rounded-tr-[4px]`}
        style={{
          left: `${startPosition}%`,
          width: `${width}%`,
          backgroundColor: event.color,
        }}
        onPress={() => setSelectedEvent(selectedEvent === event ? null : event)}
      />
    );
  };

  const renderTimeLabel = (hour: string, index: number) => {
    let labelStyle = 'absolute text-white text-xs';
    switch (index) {
      case 0: labelStyle += ' left-0'; break;
      case 1: labelStyle += ' left-[25%]'; break;
      case 2: labelStyle += ' left-[48%]'; break;
      case 3: labelStyle += ' right-[25%]'; break;
      case 4: labelStyle += ' right-0'; break;
    }

    return (
      <Text key={hour} className={labelStyle}>
        {hour}
      </Text>
    );
  };

  return (
    <BlurView
      intensity={10}
      className="pt-6 pb-6 px-4 bg-[#23232466] border border-[#26272799] rounded-[8px] overflow-hidden">
      <View className="h-[46px] flex-row relative">
        <View className="flex-row justify-between absolute left-0 right-0 top-0">
          {['00', '06', '12', '18', '24'].map(renderTimeLabel)}
        </View>
        {['00', '06', '12', '18', '24'].map((_, index) => (
          <View
            key={index}
            className="absolute top-8 bottom-0 w-[1px] bg-[#333333]"
            style={{left: `${index * 25}%`}}
          />
        ))}
        <View className="absolute left-0 right-0 h-[1px] bottom-0 bg-[#333333]" />
        <View className="absolute left-0 right-0 h-4 bottom-0">
          {events.map(renderEvent)}
        </View>
      </View>
      {selectedEvent && (
        <View className="mt-1 p-3 bg-white rounded-[8px] flex-row justify-between items-center border border-solid border-[#6B6C6E]">
          <Text className="text-black text-xs font-bold">{selectedEvent.title}</Text>
          <Text className="text-[#666666] text-[10px]">
            {selectedEvent.startTime} : {selectedEvent.endTime}
          </Text>
        </View>
      )}
    </BlurView>
  );
};

export default Timeline;
