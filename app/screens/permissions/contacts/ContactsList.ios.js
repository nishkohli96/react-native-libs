import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { useTranslation } from 'react-i18next';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';
import ContactItem from './ContactItem';

/* Read the Guide - https://www.npmjs.com/package/react-native-contacts */
const ContactsList = () => {
    const { t } = useTranslation('common');
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        const ReqPerms = async () => {
            const res = await Contacts.getAll();

            let newContacts = [];
            res.map(contact => {
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
                a?.displayName?.toLowerCase() > b?.displayName?.toLowerCase()
                    ? 1
                    : -1,
            );
            setContacts(newContacts);
        };
        ReqPerms();
    }, []);

    if (!contacts) {
        return (
            <ThemedContainer style={styles.loadingView}>
                <ActivityIndicator size={80} color="#00ff00" />
            </ThemedContainer>
        );
    }

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.contacts')} openDrawer />
            <ThemedBody>
                <ThemedText>Get all your contacts</ThemedText>
            </ThemedBody>
            <SafeAreaView style={styles.listView}>
                <ScrollView>
                    {contacts.map(contact => (
                        <ContactItem key={contact.recordID} item={contact} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    loadingView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        paddingLeft: 30,
    },
});

export default ContactsList;
