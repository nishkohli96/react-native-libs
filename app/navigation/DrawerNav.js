import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerLayout from './DrawerLayout';
import Home from '_Screens/home/Home';
import Settings from '_Screens/settings/Settings';
import ContactsList from '_Screens/permissions/contacts/ContactsList';
import Razorpay from '_Screens/razorpay/Razorpay';

const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            overlayColor="transparent"
            screenOptions={{ headerShown: false }}
            drawerContent={() => <DrawerLayout />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="ContactsList" component={ContactsList} />
            <Drawer.Screen name="Razorpay" component={Razorpay} />
        </Drawer.Navigator>
    );
};

export default NavDrawer;
