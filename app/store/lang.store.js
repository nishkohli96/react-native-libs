import { createContext, useContext } from 'react';
import { makeAutoObservable, configure } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class LangStore {
    langName = 'en';

    constructor() {
        configure({
            enforceActions: 'never' /* disable strict-mode warning */,
        });
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async getLangAction() {
        try {
            const langVar = await AsyncStorage.getItem('language');
            langVar
                ? await this.setLangAction(langVar)
                : await this.setLangAction('hi');
        } catch (e) {
            console.log(e);
        }
    }

    async setLangAction(lang = 'en') {
        try {
            await AsyncStorage.setItem('language', lang);
            this.langName = lang;
        } catch (e) {
            console.log(e);
        }
    }
}

const langStore = new LangStore();

export const LangStoreContext = createContext(langStore);
export const useLangStore = () => useContext(LangStoreContext);

export const Languages = [
    { label: 'English', value: 'en' },
    { label: 'Français', value: 'fr' },
    { label: 'हिंदी', value: 'hi' },
];
