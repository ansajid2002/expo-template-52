import React from 'react'
import { useSession } from '@/context/Authcontext';
import { router } from 'expo-router';
import { Text, View } from '@/components/Themed';

const Login = () => {
    const { signIn } = useSession();
    return (
      <View className='text-2xl text-red-300 flex items-center justify-center h-full' >
        <Text className='text-2xl '
          onPress={() => {
            signIn();
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.replace('/')
          }}>
          Sign In
        </Text>
      </View>
    );
  }

export default Login