import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { usePathname, useRouter } from 'expo-router';
import { Linking, Text } from 'react-native';

// import { WEBSITE_URL } from '@/app/_layout';

const CustomDrawerContent = (props: any) => {
 
  const whatsappLink = `https://wa.me/9220213814?text=${encodeURIComponent(` Thankyou for this template ~Sajid Ansari`)}`;
  return (
    <DrawerContentScrollView {...props}>
      {/* Privacy Policy Drawer Item */}
      <DrawerItem
        label="Drawer Item 1"
        onPress={() => Linking.openURL(whatsappLink)}
      />
     
     
    </DrawerContentScrollView>
  );
};

const _layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    />
  );
};

export default _layout;
