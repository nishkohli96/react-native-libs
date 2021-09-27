import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import packageJson from '../../package.json';
import {
    ThemedHeading,
    ThemedSubtitle,
    ThemedContainer,
} from '_Shared/Comps.themed';
import CommonStyles from '_Themes/CommonStyles';
import { useThemeStore } from '_Store/theme.store';

const DrawerLayout = () => {
    const { t } = useTranslation('common');
    const { themeObj } = useThemeStore();
    const navigation = useNavigation();

    return (
        <ThemedContainer>
            <DrawerContentScrollView>
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="home-outline"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => (
                        <ThemedHeading>{t('DRAWER.home')}</ThemedHeading>
                    )}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="ios-settings-outline"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => (
                        <ThemedHeading>{t('DRAWER.settings')}</ThemedHeading>
                    )}
                    onPress={() => {
                        navigation.navigate('Settings');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="md-phone-portrait-outline"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>Permissions</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('Permissions');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="cash-outline"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>Razorpay</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('Razorpay');
                    }}
                />
                 <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="bar-chart"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>Victory Bar Chart</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('VictoryBarChart');
                    }}
                />
            </DrawerContentScrollView>
            <DrawerItem
                label={() => (
                    <ThemedSubtitle>
                        {t('APP.version', {
                            appVersion: packageJson.version,
                        })}
                    </ThemedSubtitle>
                )}
            />
        </ThemedContainer>
    );
};

export default DrawerLayout;
