import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { TabLabel } from '_Shared/Comps.themed';
import IntroScreen1 from '_Screens/intro/IntroScreen1';
import IntroScreen2 from '_Screens/intro/IntroScreen2';
import IntroScreen3 from '_Screens/intro/IntroScreen3';
import CommonStyles from '_Themes/CommonStyles';
import { useThemeStore } from '_Store/theme.store';

const Tab = createMaterialBottomTabNavigator();
/* Refer https://reactnavigation.org/docs/material-bottom-tab-navigator  */

const TabsNav = () => {
    const { themeObj } = useThemeStore();
    const { t } = useTranslation('common');

    const styles = StyleSheet.create({
        barStyles: {
            backgroundColor: themeObj.colors.background,
            borderTopColor: themeObj.colors.border,
            borderTopWidth: 1,
        },
    });

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            barStyle={styles.barStyles}
            shifting={false} // inactive tabs label won't show
            backBehavior="order"
        >
            <Tab.Screen
                name="Feed"
                component={IntroScreen1}
                options={{
                    tabBarLabel: <TabLabel>{t('TABS.home')}</TabLabel>,
                    tabBarIcon: () => (
                        <IoniconsI
                            name="home"
                            color="#3156c4"
                            size={CommonStyles.icons.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={IntroScreen2}
                options={{
                    tabBarLabel: <TabLabel>{t('TABS.updates')}</TabLabel>,
                    tabBarIcon: () => (
                        <IoniconsI
                            name="code-slash-outline"
                            color="#32a84e"
                            size={CommonStyles.icons.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={IntroScreen3}
                options={{
                    tabBarLabel: <TabLabel>{t('TABS.profile')}</TabLabel>,
                    tabBarIcon: () => (
                        <IoniconsI
                            name="camera-outline"
                            color="#c43140"
                            size={CommonStyles.icons.tabIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default observer(TabsNav);
