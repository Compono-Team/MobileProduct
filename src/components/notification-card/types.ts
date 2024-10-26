import React from 'react';

export type NotificationType = 'reminder' | 'upcoming';

export interface NotificationCardProps {
  children: React.ReactNode;
}

export interface NotificationCardComposition {
  Icon: React.FC<{type: NotificationType}>;
  Content: React.FC<{children: React.ReactNode}>;
  Title: React.FC<{children: React.ReactNode}>;
  Description: React.FC<{children: React.ReactNode}>;
  CloseButton: React.FC<{onPress: () => void}>;
}
