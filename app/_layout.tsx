import "../global.css"
import { SessionProvider } from '@/context/Authcontext';
import { Slot } from 'expo-router';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
