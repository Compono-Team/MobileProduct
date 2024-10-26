import React from 'react';
import type {BadgeColor} from '@/types/badge';

export interface DdayCardComposition {
  Badge: React.FC<{color: BadgeColor; dday: string}>;
  Title: React.FC<{children: React.ReactNode}>;
}

export interface DdayCardProps {
  children: React.ReactNode;
}
