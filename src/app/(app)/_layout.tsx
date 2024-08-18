import {Text} from 'react-native';
import {Redirect, Stack} from 'expo-router';

import {useSession} from '../../context/sessionContext';

export default function AppLayout() {
  const {session} = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
