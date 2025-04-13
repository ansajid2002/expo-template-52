import "../global.css"
import { SessionProvider } from '@/context/Authcontext';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <GestureHandlerRootView className="flex-1">
    <SessionProvider>
      <Slot />
    </SessionProvider>
      </GestureHandlerRootView>
  );
}
