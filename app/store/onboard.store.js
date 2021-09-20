import { createContext, useContext } from 'react';
import { makeAutoObservable, configure } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class OnboardStore {
    isOnboard = false;

    constructor() {
        configure({
            enforceActions: 'never' /* disable strict-mode warning */,
        });
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async getOnboardAction() {
        try {
            const firstVisit = await AsyncStorage.getItem('isOnboard');
            if (firstVisit) {
                this.isOnboard = true;
            } else {
                this.isOnboard = false;
            }
        } catch (e) {
            return 'error';
        }
    }

    async setOnboardAction() {
        try {
            await AsyncStorage.setItem('isOnboard', 'true');
            this.isOnboard = true;
        } catch (e) {
            console.log(e);
        }
    }
}

const onboardStore = new OnboardStore();

export const OnboardContext = createContext(onboardStore);
export const useOnboardStore = () => useContext(OnboardContext);
