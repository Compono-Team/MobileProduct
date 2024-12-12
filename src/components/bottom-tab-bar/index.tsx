import React from 'react';
import {View} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import TabButton from '@/components/tab-button';

import TimelineIcon from '@/assets/images/icon/timeline.svg';
import TodoIcon from '@/assets/images/icon/todo.svg';
import CalendarIcon from '@/assets/images/icon/calendar.svg';
import MyIcon from '@/assets/images/icon/my.svg';

const icons = {
  index: TimelineIcon,
  todo: TodoIcon,
  // calendar: CalendarIcon,
  my: MyIcon,
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View className="flex-row justify-around p-2.5 border-t border-[#2F3030] bg-[#232324]">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = icons[route.name as keyof typeof icons];

        return (
          <TabButton
            key={route.key}
            label={label}
            onPress={onPress}
            isFocused={isFocused}
            Icon={Icon}
          />
        );
      })}
    </View>
  );
};

export default BottomTabBar;
