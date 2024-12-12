import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {DateInfo} from './types';
export const formatDate = (date: Date, formatStr: string): string => {
  return format(date, formatStr, {locale: ko});
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return formatDate(date1, 'yyyy-MM-dd') === formatDate(date2, 'yyyy-MM-dd');
}; 