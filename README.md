# RnTemplate

**"An Ideal app-template to start your next `react-native` project."**

## Features

- Project code properly organized, and using `alias-imports`.
- Implemented Onboarding-screen.
- Stack, Tab and Drawer Navigation.
- Global state management using `mobx-react-lite`.
- Support for theme and language change.
- Added custom Google-font (Poppins). 
- Added relevant links for easier & time-saving app development under the **Developer-Guide** section.

## Developer Guide

-   To create react-native-app with custom package name, do a project-wide find and replace ```com.awesomeproject → com.mycompany.myapp``` Also in the `android` directory,
```src/main/java/com/awesomeproject → src/main/java/com/mycompany/myapp```

-   Generate your app Icon using [MakeAppIcon](https://makeappicon.com/).Read More about app icon setup on this [Link](https://aboutreact.com/react-native-change-app-icon/).iOS icons can be generated using `Icon Set Creater` app available on the App Store. Make sure to also provide a round icon with the name `ic_launcher_round.png` in your android folder for various `mipmap-` directories.
Go to [easyappicon.com](https://easyappicon.com/).

- Import this statement at the topmost line of your root as per `react-navigation` docs.
```import 'react-native-gesture-handler';```

-   Enable Hermes [link](https://reactnative.dev/docs/hermes)

-   To make sure that the content doesn't overlap, especially in iPhones, use `SafeAreaProvider`. Import this stmt at the top of your app code.
```import { SafeAreaProvider } from 'react-native-safe-area-context';```

-   Install [Async Storage](https://react-native-async-storage.github.io/async-storage/). Needs to be manually linked. Go to [this thread](https://stackoverflow.com/questions/61479644/invalid-podfile-file-unable-to-locate-the-executable-node) if `npx pod-install` fails to run.

-   Dependencies for `@react-navigation/stack` -> `react-native-safe-area-context`, `react-native-gesture-handler`. Run `npx pod-install` after installing the dependencies.

- Using `react-native-reanimated` v-1.13.3 as v2 was not working fine.

- Manually link `react-native-vector-icons` in ios [link](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06). Check [this link](https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4) to add/remove fonts. 

# Support Me

If you found this template helpful and saved your valuable time, consider [buying me a coffee](https://www.buymeacoffee.com/nish1896)  