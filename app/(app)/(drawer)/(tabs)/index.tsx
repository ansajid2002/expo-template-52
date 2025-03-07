import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useSession } from '@/context/Authcontext';

export default function TabOneScreen() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
       <Text   className='text-4xl '
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
