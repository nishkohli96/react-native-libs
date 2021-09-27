import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerLayout from './DrawerLayout';
import Home from '_Screens/home/Home';
import Settings from '_Screens/settings/Settings';
import Razorpay from '_Screens/razorpay/Razorpay';

import Permissions from '_Screens/permissions';
import ContactsList from '_Screens/permissions/contacts/ContactsList';
import Location from '_Screens/permissions/location/Location';

import Charts from '_Screens/charts';
import LineChartScreen from '_Screens/charts/LineChartScreen';
import RadarChartScreen from '_Screens/charts/RadarChartScreen';
import VictoryBarChart from '_Screens/charts/VictoryBarChart';
import VictoryPolarChart from '_Screens/charts/VictoryPolarChart';

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

<<<<<<< HEAD
            {/* Chart Screens */}
            <Drawer.Screen name="Charts" component={Charts} />
            <Drawer.Screen name="VictoryBarChart" component={VictoryBarChart} />
            <Drawer.Screen name="VictoryPolarChart" component={VictoryPolarChart} />
            {Platform.OS === 'android' && (
                <>
                    <Drawer.Screen
                        name="LineChartScreen"
                        component={LineChartScreen}
                    />
                    <Drawer.Screen
                        name="RadarChartScreen"
                        component={RadarChartScreen}
                    />
                </>
            )}

            {/* Permission Screens */}
=======
            {/* Permission Related Screens */}
>>>>>>> origin/main
            <Drawer.Screen name="Permissions" component={Permissions} />
            <Drawer.Screen name="ContactsList" component={ContactsList} />
            <Drawer.Screen name="Location" component={Location} />
        </Drawer.Navigator>
    );
};

export default NavDrawer;
