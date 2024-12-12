import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {NotificationCard} from '@/components/notification-card';
import {NotificationType} from '@/components/notification-card/types';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description?: string;
}

interface NotificationListProps {
  notifications: Notification[];
}

export const NotificationList: React.FC<NotificationListProps> = ({notifications: initialNotifications}) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClose = (id: string) => {
    setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== id));
  };

  return (
    <ScrollView className="flex-1 bg-[#121212] py-4 min-h-[18px]">
      {notifications.map((notification) => (
        <View key={notification.id} className="mb-3.5">
          <NotificationCard>
            <NotificationCard.Icon type={notification.type} />
            <NotificationCard.Content>
              <View className="flex-row justify-between items-center">
                <NotificationCard.Title>{notification.title}</NotificationCard.Title>
                <NotificationCard.CloseButton onPress={() => handleClose(notification.id)} />
              </View>
              {notification.description && (
                <NotificationCard.Description>{notification.description}</NotificationCard.Description>
              )}
            </NotificationCard.Content>
          </NotificationCard>
        </View>
      ))}
    </ScrollView>
  );
};
