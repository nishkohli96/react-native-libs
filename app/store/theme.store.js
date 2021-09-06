import { createContext, useContext } from 'react';
import { makeObservable, action, observable, configure } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Light from '_Themes/Light';
import Dark from '_Themes/Dark';

export class ThemeStore {

    themeObj = Light;

    constructor() {
        configure({
            enforceActions: 'never' /* disable strict-mode warning */,
        });
        makeObservable(this, {
            themeObj: observable,
            /* 
                action.bind -> automatically bind a method to the correct 
                instance, so that this is always correctly bound inside 
                the function. */
            getThemeAction: action.bound,
            setThemeAction: action.bound,
        });
        /*
            Can also be written like this -
            makeAutoObservable(this, {}, { autoBind: true })
        */
    }

    async getThemeAction() {
        try {
            const themeVar = await AsyncStorage.getItem('theme');
            themeVar
                ? await this.setThemeAction(themeVar)
                : await this.setThemeAction('light');
        } catch (e) {
            console.log(e);
        }
    }

    async setThemeAction(themeName = 'light') {
        try {
            if (themeName) {
                await AsyncStorage.setItem('theme', themeName);
                this.themeObj = themeName === 'light' ? Light : Dark;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

const themeStore = new ThemeStore();

export const ThemeStoreContext = createContext(themeStore);
export const useThemeStore = () => useContext(ThemeStoreContext);
