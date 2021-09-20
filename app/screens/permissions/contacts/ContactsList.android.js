import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    PermissionsAndroid,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { useTranslation } from 'react-i18next';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';
import ContactItem from './ContactItem';

/* Read the Guide - https://www.npmjs.com/package/react-native-contacts */

const ContactsList = () => {
    /* Make sure to add relevant permissions in AndroidManifest.xml" */

    const { t } = useTranslation('common');
    const [contacts, setContacts] = React.useState([]);

    const getContactList = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: 'This app would like to view your contacts.',
                    buttonPositive: 'Accept',
                    buttonNegative: 'Cancel',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const contacts = await Contacts.getAll();

                let newContacts = [];
                contacts.map(contact => {
                    newContacts.push({
                        rawContactId: contact.rawContactID,
                        recordID: contact.recordID,
                        givenName: contact.givenName,
                        familyName: contact.familyName,
                        displayName: contact.displayName,
                        //its an array, getting only the 1st phoneno
                        phoneNumbers: contact.phoneNumbers[0],
                        thumbnailPath: contact.thumbnailPath,
                    });
                });

                newContacts.sort((a, b) =>
                    a?.displayName?.toLowerCase() >
                    b?.displayName?.toLowerCase()
                        ? 1
                        : -1,
                );
                setContacts(newContacts);
            } else {
                console.log('Contacts permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    getContactList();

    if (!contacts) {
        return (
            <ThemedContainer style={styles.loadingView}>
                <ActivityIndicator size={80} color="#00ff00" />
            </ThemedContainer>
        );
    }

    return (
        <ThemedContainer style={styles.container}>
            <Header title={t('DRAWER.contacts')} />
            <ThemedBody>
                <ThemedText>
                    Scroll across the list to see your contacts
                </ThemedText>
                <SafeAreaView style={styles.listView}>
                    <ScrollView>
                        {contacts.map(contact => (
                            <ContactItem
                                key={contact.recordID}
                                item={contact}
                            />
                        ))}
                    </ScrollView>
                </SafeAreaView>
                <ThemedText>---- End of the list ----</ThemedText>
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    container: { paddingBottom: 50 },
    loadingView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        height: 400,
        marginBottom: 20,
    },
});

export default ContactsList;
