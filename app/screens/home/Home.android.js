import React from 'react';
import {
    BackHandler,
    Text,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';

import Header from '_Shared/Header';
import {
    ThemedContainer,
    ThemedBody,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';
import { useThemeStore } from '_Store/theme.store';

const App = () => {
    const { t } = useTranslation('common');
    const { themeObj } = useThemeStore();
    const [open, setOpen] = React.useState(false);

    const backAction = () => {
        setOpen(true);
        return true; /* else the app will exit */
    };

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalBody: {
            width: 250,
            height: 140,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: themeObj.colors.border,
            justifyContent: 'space-between',
            padding: 10,
        },
        modalHeading: {
            color: themeObj.colors.heading,
            fontSize: 22,
            fontWeight: '500',
            marginLeft: 10,
            marginTop: 5,
        },
        btmBtns: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        halfRow: {
            flex: 0.5,
            alignItems: 'center',
        },
        touchArea: { padding: 10 },
    });

    const ModalComponent = () => (
        <Modal
            transparent={true}
            visible={open}
            onRequestClose={() => setOpen(false)}>
            <View style={styles.centeredView}>
                <View style={styles.modalBody}>
                    <View>
                        <Text style={styles.modalHeading}>
                            {t('HOMESCREEN.exitMsg')}
                        </Text>
                    </View>
                    <View style={styles.btmBtns}>
                        <View style={styles.halfRow}>
                            <TouchableOpacity
                                style={styles.touchArea}
                                onPress={() => setOpen(false)}>
                                <ThemedText>{t('COMMON.cancel')}</ThemedText>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.halfRow}>
                            <TouchableOpacity
                                style={styles.touchArea}
                                onPress={() => BackHandler.exitApp()}>
                                <ThemedText>{t('COMMON.ok')}</ThemedText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );

    useFocusEffect(
        React.useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    backAction,
                );
        }, []),
    );

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.home')} openDrawer />
            <ThemedBody>
                <ModalComponent />
                <ThemedCard>
                    <ThemedText>Welcome to the HomeScreen !!!</ThemedText>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default App;
