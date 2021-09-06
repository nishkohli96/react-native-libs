import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '_Shared/Header';
import {
    ThemedContainer,
    ThemedBody,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';

const App = () => {
    const { t } = useTranslation('common');

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.home')} openDrawer />
            <ThemedBody>
                <ThemedCard>
                    <ThemedText>Welcome to the HomeScreen !!!</ThemedText>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default App;
