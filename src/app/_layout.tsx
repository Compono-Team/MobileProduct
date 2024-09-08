import {Slot} from 'expo-router';
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
          <Slot />
        </SessionProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
