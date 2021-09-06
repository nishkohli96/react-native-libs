import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import IoniconsI from 'react-native-vector-icons/Ionicons';

import { ThemedHeading } from './Comps.themed';
import { useThemeStore } from '_Store/theme.store';

const Header = ({ title, openDrawer = false }) => {
    const navigation = useNavigation();
    const { themeObj } = useThemeStore();

    const styles = StyleSheet.create({
        container: {
            paddingTop: Platform.OS === 'ios' ? 60 : 20,
            paddingBottom: 20,
            paddingLeft: 20,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: themeObj.colors.primary,
            borderBottomColor: themeObj.colors.border,
            borderBottomWidth: 1,
        },
        textView: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
        },
    });

    return (
        <View style={styles.container}>
            {openDrawer ? (
                <IoniconsI
                    name="md-menu-outline"
                    size={30}
                    color={themeObj.colors.heading}
                    onPress={() => navigation.openDrawer()}
                />
            ) : (
                <IoniconsI
                    name="arrow-back"
                    size={25}
                    color={themeObj.colors.heading}
                    onPress={() => navigation.goBack()}
                />
            )}
            <View style={styles.textView}>
                <ThemedHeading>{title}</ThemedHeading>
            </View>
        </View>
    );
};

export default observer(Header);
