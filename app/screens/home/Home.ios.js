import React from 'react';
import { View, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-community/clipboard';
import { SwipeActionView } from 'react-native-action-view';

import Header from '_Shared/Header';
import {
    ThemedContainer,
    ThemedBody,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';

const App = () => {
    const { t } = useTranslation('common');
    const [pressText, setPressText] = React.useState('Press me');
    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = () =>
        Clipboard.setString('this is a copied string');

    const fetchCopiedText = async () => {
        /* Somehow shows blank text when console.log, but setText() works */
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.home')} openDrawer />
            <ThemedBody>
                <ThemedCard>
                    <ThemedText>Welcome to the HomeScreen !!!</ThemedText>
                </ThemedCard>

                <ThemedCard style={styles.copyCard}>
                    <ThemedText style={styles.headerText}>
                        Pressable Component - Click/Press the button
                    </ThemedText>

                    <Pressable
                        onPressIn={() => setPressText('normal press')}
                        onPressOut={() => setPressText('Press Me')}
                        onLongPress={() => setPressText('On Long Press...')}>
                        <View style={styles.pressView}>
                            <ThemedText style={styles.pressedText}>
                                {pressText}
                            </ThemedText>
                        </View>
                    </Pressable>

                    <TouchableOpacity onPress={copyToClipboard}>
                        <View style={styles.pressView}>
                            <ThemedText>
                                Click here to copy to Clipboard
                            </ThemedText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fetchCopiedText}>
                        <ThemedText>View copied text</ThemedText>
                    </TouchableOpacity>

                    <ThemedText>{copiedText}</ThemedText>
                    <ThemedText>{Config.SOME_ENV_KEY}</ThemedText>

                    <SwipeActionView
                        style={styles.swiperView}
                        rightExpansionSettings={{ buttonIndex: 0 }}
                        leftExpansionSettings={{ buttonIndex: 0 }}
                        rightButtons={[
                            {
                                title: 'Red',
                                color: 'rgb(255, 0, 0)',
                                callback: () => {
                                    alert('Red button tapped.');
                                },
                            },
                            {
                                title: 'Green',
                                color: 'rgb(0, 255, 0)',
                                callback: () => {
                                    alert('Green button tapped.');
                                },
                            },
                            {
                                title: 'Blue',
                                color: 'rgb(0, 0, 255)',
                                callback: () => {
                                    alert('Blue button tapped.');
                                },
                            },
                        ]}
                        leftButtons={[
                            {
                                title: 'Red',
                                color: 'rgb(255, 0, 0)',
                                callback: () => {
                                    alert('Red button tapped.');
                                },
                            },
                            {
                                title: 'Green',
                                color: 'rgb(0, 255, 0)',
                                callback: () => {
                                    alert('Green button tapped.');
                                },
                            },
                            {
                                title: 'Blue',
                                color: 'rgb(0, 0, 255)',
                                callback: () => {
                                    alert('Blue button tapped.');
                                },
                            },
                        ]}
                        leftSwipeSettings={{
                            transition: 'rotate3d',
                            enableSwipeBounces: true,
                        }}
                        rightSwipeSettings={{
                            transition: 'clipCenter',
                            enableSwipeBounces: false,
                        }}>
                        <ThemedText>
                            To get started, swipe this view.
                        </ThemedText>
                    </SwipeActionView>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    copyCard: { marginTop: 30 },
    pressView: {
        borderColor: 'grey',
        padding: 10,
        backgroundColor: 'silver',
        marginTop: 10,
        marginBottom: 10,
    },
    pressedText: {
        color: 'red',
    },
    copiedText: {
        marginTop: 10,
        color: '#007aba',
    },
    swiperView: {
        marginTop: 30,
        backgroundColor: 'grey',
        padding: 20,
    },
});

export default App;
