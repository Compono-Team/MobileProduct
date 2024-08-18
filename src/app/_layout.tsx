import {Slot} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SessionProvider} from '../context/sessionContext';

import '../../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SessionProvider>
        <StatusBar style="light" />
        <Slot />
      </SessionProvider>
    </SafeAreaProvider>
  );
}
