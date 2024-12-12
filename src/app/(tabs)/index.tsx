import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {DdayList} from '@/components/dday-list';
import type {BadgeColor} from '@/components/badge/Badge';
import Timeline from '@/components/timeline/Timeline';
import {NotificationList} from '@/components/notification-list';
import type {NotificationType} from '@/components/notification-card/types';
import Calendar from '@/components/calendar/Calendar';

const dummyData = [
  {
    id: '1',
    dday: 'D-day',
    title: '광고로 보는 마케팅 공부',
    color: '#CC0162' as BadgeColor,
  },
  {
    id: '2',
    dday: 'D-1',
    title: '실험 관찰 레포트 준비하기',
    color: '#FFA34D' as BadgeColor,
  },
  {
    id: '3',
    dday: 'D-2',
    title: '프로젝트 발표 준비',
    color: '#69C68E' as BadgeColor,
  },
  {
    id: '4',
    dday: 'D-3',
    title: '영어 에세이 작성',
    color: '#8BA5FF' as BadgeColor,
  },
];

const timelineEvents = [
  {
    id: '1',
    title: '과목 A 발표하고 자료 조사한 후 이동',
    startTime: '18:00',
    endTime: '23:40',
    color: '#8BA5FF',
  },
  {
    id: '2',
    title: '점심 식사',
    startTime: '12:00',
    endTime: '16:00',
    color: '#69C68E',
  },
  {
    id: '3',
    title: '운동',
    startTime: '07:00',
    endTime: '09:00',
    color: '#FFA34D',
  },
  {
    id: '4',
    title: '아침 미팅',
    startTime: '09:00',
    endTime: '12:00',
    color: '#F45D5D',
  },
];

const notificationData = [
  {
    id: '1',
    type: 'reminder' as NotificationType,
    title: '오늘 마감인 일이 있어요!',
    description:
      '광고로 보는 마케팅 공부가 D-Day 입니다. 조금씩 준비를 하는 건 어떨까요?',
  },
  {
    id: '2',
    type: 'upcoming' as NotificationType,
    title: '30분 뒤에 마감 예정인 To-do가 있어요.',
    description: '15:00 - 16:00에 회의 준비하기',
  },
  {
    id: '3',
    type: 'upcoming' as NotificationType,
    title: '30분 뒤에 시작 예정인 To-do가 있어요.',
    description: '16:00 - 17:00에 소모임 스터디 하기',
  },
];

export default function TimelinePage() {
  return (
    <ScrollView
      className="flex-1 bg-[#121212] min-h-[100vh]"
      contentContainerStyle={{paddingBottom: 80}}>
      <View className="p-4 h-full">
        <View className="w-full">
          <Calendar />
        </View>
        <View className="mt-4">
          <DdayList items={dummyData} />
        </View>
        <View className="mt-6 min-h-[94px] max-h-[136px]">
          <Timeline events={timelineEvents} />
        </View>
        <View className="mt-6">
          <NotificationList notifications={notificationData} />
        </View>
      </View>
    </ScrollView>
  );
}
