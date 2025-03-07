import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Text } from 'react-native';
import { useSession } from '../../context/Authcontext';
import { useColorScheme } from '@/components/useColorScheme';

export const runtime = 'automatic'; // Fix static rendering warning

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const { session, isLoading } = useSession();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [loaded, error] = useFonts({
    'customfont-Light': require('../../assets/fonts/LeagueSpartan-Light.ttf'),  
    'customfont-Regular': require('../../assets/fonts/LeagueSpartan-Regular.ttf'), // example : style={[{ fontFamily: 'space-Mono' }]} 
    'customfont-SemiBold': require('../../assets/fonts/LeagueSpartan-SemiBold.ttf'), // example : style={[{ fontFamily: 'space-Mono' }]} 
    'customfont-Bold': require('../../assets/fonts/LeagueSpartan-Bold.ttf'), // example : style={[{ fontFamily: 'space-Mono' }]} 
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || isLoading) {
    return <Text className='text-center flex items-center justify-center'>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/Login" />; // Fixed path
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false, animation:"fade" , }} />
      </Stack>
    </ThemeProvider>
  );
}
