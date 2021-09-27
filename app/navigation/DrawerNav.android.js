import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerLayout from './DrawerLayout';
import Home from '_Screens/home/Home';
import Settings from '_Screens/settings/Settings';
import Razorpay from '_Screens/razorpay/Razorpay';
import Permissions from '_Screens/permissions';
import ContactsList from '_Screens/permissions/contacts/ContactsList';
import Location from '_Screens/permissions/location/Location';
import LineChartScreen from '_Screens/charts/LineChartScreen';
import RadarChartScreen from '_Screens/charts/RadarChartScreen';
import VictoryBarChart from '_Screens/charts/VictoryBarChart';

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
            <Drawer.Screen name="Razorpay" component={Razorpay} />
            <Drawer.Screen name="LineChartScreen" component={LineChartScreen} />
            <Drawer.Screen name="RadarChartScreen" component={RadarChartScreen} />
            <Drawer.Screen name="VictoryBarChart" component={VictoryBarChart} />

            {/* Permission Related Screens */}
            <Drawer.Screen name="Permissions" component={Permissions} />
            <Drawer.Screen name="ContactsList" component={ContactsList} />
            <Drawer.Screen name="Location" component={Location} />
        </Drawer.Navigator>
    );
};

export default NavDrawer;
