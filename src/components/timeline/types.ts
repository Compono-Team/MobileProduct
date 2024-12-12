export interface TimelineEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}
