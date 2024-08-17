import {Stack} from 'expo-router';

import '../global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
