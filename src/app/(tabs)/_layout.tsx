import React from 'react';
import {Redirect, Tabs} from 'expo-router';
import BottomTabBar from '@/components/bottom-tab-bar';
import {useSession} from '@/context/sessionContext';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export default function AppLayout() {
  const {session} = useSession();

  // if (!session) {
  //   return <Redirect href="/sign-in" />;
  // }

  return (
    <Tabs
      tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="index" options={{title: '타임라인'}} />
      <Tabs.Screen name="todo" options={{title: '할 일'}} />
      {/* <Tabs.Screen name="calendar" options={{title: '캘린더'}} /> */}
      <Tabs.Screen name="my" options={{title: '마이'}} />
    </Tabs>
  );
}
