import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerLayout from './DrawerLayout';
import Home from '_Screens/home/Home';
import Settings from '_Screens/settings/Settings';

/*
Refer https://reactnavigation.org/docs/drawer-navigator#checking-if-the-drawer-is-open
*/
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
        </Drawer.Navigator>
    );
};

export default NavDrawer;
