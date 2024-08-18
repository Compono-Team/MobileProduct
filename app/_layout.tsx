import {Slot} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import {SessionProvider} from '../context/sessionContext';

import '../global.css';

const RootLayout = () => {
  return (
    <SessionProvider>
      <StatusBar style="light" />
      <Slot />
    </SessionProvider>
  );
};

export default RootLayout;
