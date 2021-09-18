import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    ThemedContainer,
    ThemedBody,
    ThemedHeading,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';
import Header from '_Shared/Header';

const Permissions = () => {
    const navigation = useNavigation();

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
                        <ThemedText>Contacts</ThemedText>
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
