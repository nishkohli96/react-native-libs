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
                            name="logo-android"
                            color={themeObj.colors.heading}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>TABS</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('TabsNav');
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
