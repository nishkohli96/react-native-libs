import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNPickerSelect from 'react-native-picker-select';

import Header from '_Shared/Header';
import { ThemedContainer, ThemedText } from '_Shared/Comps.themed';
import { useThemeStore } from '_Store/theme.store';
import { Languages, useLangStore } from '_Store/lang.store';

const Settings = () => {
    const { t } = useTranslation('common');
    const { setLangAction } = useLangStore();
    const { themeObj, setThemeAction } = useThemeStore();

    const [isEnabled, setIsEnabled] = React.useState(themeObj.dark);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setThemeAction(!isEnabled ? 'dark' : 'light');
    };

    const styles = StyleSheet.create({
        container: {
            paddingTop: 25,
            borderBottomWidth: 0.5,
            borderBottomColor: themeObj.colors.border,
        },
        flexRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 25,
            paddingRight: 25,
            borderTopWidth: 1,
            borderTopColor: themeObj.colors.border,
        },
        textCol: {
            flex: 0.5,
        },
        settingText: {
            fontSize: 20,
        },
        endContent: {
            flex: 0.5,
            alignItems: 'flex-end',
        },
        selectText: {
            fontSize: 16,
            color: '#007aba',
        },
    });

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.settings')} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flexRow}>
                        <View style={styles.textCol}>
                            <ThemedText style={styles.settingText}>
                                {t('SETTINGS.darkTheme')}
                            </ThemedText>
                        </View>
                        <View style={styles.endContent}>
                            <Switch
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={styles.textCol}>
                            <ThemedText style={styles.settingText}>
                                {t('SETTINGS.language')}
                            </ThemedText>
                        </View>
                        <View style={styles.endContent}>
                            <RNPickerSelect
                                items={Languages}
                                placeholder={{
                                    label: '',
                                    value: null,
                                    color: themeObj.colors.primary,
                                }}
                                Icon={() => (
                                    <Text style={styles.selectText}>
                                        Select
                                    </Text>
                                )}
                                onValueChange={value => setLangAction(value)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ThemedContainer>
    );
};

export default observer(Settings);
