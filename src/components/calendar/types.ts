import Swiper from 'react-native-swiper';

export interface DateInfo {
  weekday: string;
  date: Date;
}

export interface CalendarCellProps {
  date: Date;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

export interface WeekViewProps {
  dates: DateInfo[];
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export type SwiperRefType = Swiper;

export interface PageSelectedEvent {
  nativeEvent: {
    position: number;
  };
} 