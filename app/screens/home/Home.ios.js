import React from 'react';
import { View, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-community/clipboard';

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

    const copyToClipboard = () => {
        Clipboard.setString('this is a copied string');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        console.log('text: ', text);
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
                        Click The Appropriate Btn to see their functionality
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

                    <ThemedText>
                        {copiedText}
                    </ThemedText>
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
});

export default App;
