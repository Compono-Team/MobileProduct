import React, {useState, useRef} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Calendar as RNCalendar, DateData} from 'react-native-calendars';
import {WeekView} from './WeekView';
import {formatDate} from './utils';
import {
  format,
  eachWeekOfInterval,
  eachDayOfInterval,
  subDays,
  addDays,
} from 'date-fns';
import {ko} from 'date-fns/locale';
import CalendarIcon from '@/assets/images/icon/calendar.svg';
import {useCalendarStore} from '@/stores/useCalendarStore';
import PagerView, {PagerViewOnPageSelectedEvent} from 'react-native-pager-view';

const Calendar: React.FC = () => {
  const pagerRef = useRef<PagerView>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const {selectedDate, setSelectedDate} = useCalendarStore();

  const [weeks, setWeeks] = useState(() => {
    const initialWeeks = eachWeekOfInterval(
      {
        start: subDays(new Date(), 7),
        end: addDays(new Date(), 7),
      },
      {
        weekStartsOn: 1,
      },
    ).reduce((acc: Date[][], cur) => {
      const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6),
      });
      acc.push(allDays);
      return acc;
    }, []);
    return initialWeeks;
  });

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCalendarSelect = (day: DateData) => {
    const selectedDate = new Date(day.timestamp);
    handleDateSelect(selectedDate);
    setShowCalendar(false);
  };

  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    const position = e.nativeEvent.position;

    if (position >= weeks.length - 2) {
      const lastWeek = weeks[weeks.length - 1];
      const newWeek = eachDayOfInterval({
        start: addDays(lastWeek[6], 1),
        end: addDays(lastWeek[6], 7),
      });
      setWeeks(prev => [...prev, newWeek]);
    }

    if (position <= 1) {
      const firstWeek = weeks[0];
      const newWeek = eachDayOfInterval({
        start: subDays(firstWeek[0], 7),
        end: subDays(firstWeek[0], 1),
      });
      setWeeks(prev => [newWeek, ...prev]);
      pagerRef.current?.setPageWithoutAnimation(position + 1);
    }
  };

  return (
    <View className="w-full h-[90px]">
      <View className="mb-2 justify-between items-center flex-row">
        <View className="flex-row items-center gap-2">
          <Text className="text-white text-[20px] font-normal leading-[24px] text-center">
            {format(selectedDate, 'M월', {locale: ko})}
          </Text>
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <CalendarIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
      <PagerView
        ref={pagerRef}
        style={{flex: 1}}
        initialPage={1}
        onPageSelected={handlePageSelected}>
        {weeks.map((dates, weekIndex) => (
          <WeekView
            key={weekIndex}
            dates={dates.map(date => ({
              weekday: formatDate(date, 'E'),
              date: date,
            }))}
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        ))}
      </PagerView>

      <Modal
        visible={showCalendar}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCalendar(false)}>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          activeOpacity={1}
          onPress={() => setShowCalendar(false)}>
          <View className="bg-white m-4 rounded-lg mt-20">
            <RNCalendar
              onDayPress={handleCalendarSelect}
              markedDates={{
                [format(selectedDate, 'yyyy-MM-dd')]: {selected: true},
              }}
              theme={{
                selectedDayBackgroundColor: '#000000',
                todayTextColor: '#000000',
                arrowColor: '#000000',
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Calendar;
