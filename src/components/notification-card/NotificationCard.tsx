import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BlurView} from 'expo-blur';
import {NotificationIcon} from './NotificationIcon';
import CloseIcon from '@/assets/images/icon/close.svg';
import type {NotificationCardProps, NotificationCardComposition, NotificationType} from './types';

const NotificationCard: React.FC<NotificationCardProps> & NotificationCardComposition = ({children}) => {
  return (
    <BlurView intensity={10} tint="dark" className="rounded-[4px] overflow-hidden">
      <View className="flex-row items-center py-6 px-4 bg-[#23232466] rounded-[4px] border border-[#26262799]">
        {children}
      </View>
    </BlurView>
  );
};

const Icon: React.FC<{type: NotificationType}> = ({type}) => (
  <NotificationIcon type={type} />
);

const Content: React.FC<{children: React.ReactNode}> = ({children}) => (
  <View className="flex-1 ml-4">{children}</View>
);

const Title: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Text className="text-white text-base font-bold">{children}</Text>
);

const Description: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Text className="text-[#D7D8DB] text-sm mt-2">{children}</Text>
);

const CloseButton: React.FC<{onPress: () => void}> = ({onPress}) => (
  <TouchableOpacity onPress={onPress} className="ml-2">
    <CloseIcon width={16} height={16} />
  </TouchableOpacity>
);

NotificationCard.Icon = Icon;
NotificationCard.Content = Content;
NotificationCard.Title = Title;
NotificationCard.Description = Description;
NotificationCard.CloseButton = CloseButton;

export {NotificationCard};
