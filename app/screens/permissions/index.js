import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IoniconsI from 'react-native-vector-icons/Ionicons';

import {
    ThemedContainer,
    ThemedBody,
    ThemedHeading,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';
import Header from '_Shared/Header';
import { useThemeStore } from '_Store/theme.store';
import CommonStyles from '_Themes/CommonStyles';

const Permissions = () => {
    const navigation = useNavigation();
    const { themeObj } = useThemeStore();

    return (
        <ThemedContainer>
            <Header title="Permissions" openDrawer />
            <ThemedBody>
                <ThemedHeading>
                    Click on any of the items to proceed further
                </ThemedHeading>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ContactsList')}>
                    <ThemedCard style={styles.card}>
                        <ThemedText>
                            <IoniconsI
                                name="person-outline"
                                color={themeObj.colors.text}
                                size={CommonStyles.icons.drawerIcon}
                            />{' '}
                            Contacts
                        </ThemedText>
                    </ThemedCard>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ContactsList')}>
                    <ThemedCard style={styles.card}>
                        <ThemedText>
                            <IoniconsI
                                name="location-outline"
                                color={themeObj.colors.text}
                                size={CommonStyles.icons.drawerIcon}
                            />{' '}
                            Location
                        </ThemedText>
                    </ThemedCard>
                </TouchableOpacity>
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    card: { marginTop: 30, alignItems: 'center' },
});

export default Permissions;
