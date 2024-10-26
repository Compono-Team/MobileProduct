import type {BadgeColor} from '@/types/badge';

export interface DdayItem {
  id: string;
  dday: string;
  title: string;
  color: BadgeColor;
}

export interface DdayListProps {
  items: DdayItem[];
}
