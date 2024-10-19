import React from 'react';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import {SessionProvider} from '@/context/sessionContext';

import '../../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider>
        <SessionProvider>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleVisible: false,
            }}>
            <Stack.Screen name="edit-profile" options={{headerShown: true}} />
          </Stack>
        </SessionProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
