import React from 'react';
import ReminderIcon from '@/assets/images/icon/reminder.svg';
import UpcomingIcon from '@/assets/images/icon/upcoming.svg';
import {NotificationType} from './types';

interface NotificationIconProps {
  type: NotificationType;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({type}) => {
  const IconComponent = type === 'reminder' ? ReminderIcon : UpcomingIcon;

  return <IconComponent width={24} height={24} />;
};
