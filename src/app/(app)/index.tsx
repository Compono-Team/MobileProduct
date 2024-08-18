import {Text, View} from 'react-native';

import {useSession} from '@/context/sessionContext';

export default function Index() {
  const {signOut} = useSession();
  return (
    <View>
      <Text
        onPress={() => {
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
