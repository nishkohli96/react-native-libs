import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import Config from 'react-native-config';

import StackNav from '_Navigation/StackNav';
import { useThemeStore } from '_Store/theme.store';
import { useLangStore } from '_Store/lang.store';
import { useOnboardStore } from '_Store/onboard.store';

import common_en from '_I18N/en/common.json';
import common_fr from '_I18N/fr/common.json';
import common_hi from '_I18N/hi/common.json';

const App = () => {
    const { getOnboardAction } = useOnboardStore();
    const { themeObj, getThemeAction } = useThemeStore();
    const { langName, getLangAction } = useLangStore();
    console.log(Config.ENV_KEY)

    React.useEffect(() => {
        getOnboardAction();
        getThemeAction();
        getLangAction();

        i18next.init({
            interpolation: { escapeValue: false }, // React already does escaping
            lng: langName, // language to use
            fallbackLng: 'en', // in case no language found
            resources: {
                en: {
                    common: common_en, // 'common' is our custom namespace
                },
                fr: {
                    common: common_fr,
                },
                hi: {
                    common: common_hi,
                },
            },
        });
    }, [langName]);

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18next}>
                <ThemeProvider theme={themeObj}>
                    <StatusBar
                        animated={true}
                        backgroundColor={themeObj.colors.primary}
                        barStyle={
                            themeObj.dark ? 'light-content' : 'dark-content'
                        }
                        networkActivityIndicatorVisible={true} // for iOS
                    />
                    <StackNav />
                </ThemeProvider>
            </I18nextProvider>
        </SafeAreaProvider>
    );
};

export default observer(App);
