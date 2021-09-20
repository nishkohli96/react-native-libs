# react-native-libs

**"One or more of the used libraries would be a must in your next `react-native` project"**

## Developer Guide

-   Read the document of [react-native-config](https://www.npmjs.com/package/react-native-config) to use .env files based upon the shell. For running android app in windows, I used `SET ENVFILE=.env.staging && react-native run-android`.

-   Generate your app Icon using [MakeAppIcon](https://makeappicon.com/).Read More about app icon setup on this [Link](https://aboutreact.com/react-native-change-app-icon/).iOS icons can be generated using `Icon Set Creater` app available on the App Store. Make sure to also provide a round icon with the name `ic_launcher_round.png` in your android folder for various `mipmap-` directories.
    Go to [easyappicon.com](https://easyappicon.com/).

-   Import this statement at the topmost line of your root as per `react-navigation` docs.
    `import 'react-native-gesture-handler';`

-   Enable Hermes [link](https://reactnative.dev/docs/hermes)

-   To make sure that the content doesn't overlap, especially in iPhones, use `SafeAreaProvider`. Import this stmt at the top of your app code.
    `import { SafeAreaProvider } from 'react-native-safe-area-context';`

-   Install [Async Storage](https://react-native-async-storage.github.io/async-storage/). Needs to be manually linked. Go to [this thread](https://stackoverflow.com/questions/61479644/invalid-podfile-file-unable-to-locate-the-executable-node) if `npx pod-install` fails to run.

-   Dependencies for `@react-navigation/stack` -> `react-native-safe-area-context`, `react-native-gesture-handler`. Run `npx pod-install` after installing the dependencies.

-   Using `react-native-reanimated` v-1.13.3 as v2 was not working fine.

-   Manually link `react-native-vector-icons` in ios [link](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06). Check [this link](https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4) to add/remove fonts.

## Main Libraries Used

-   [@react-native-community/clipboard](https://www.npmjs.com/package/@react-native-community/clipboard)
-   [react-native-config](https://www.npmjs.com/package/react-native-config)
-   [react-native-contacts](https://www.npmjs.com/package/react-native-contacts)
-   [react-native-geolocation-service](https://www.npmjs.com/package/react-native-geolocation-service)
-   [react-native-razorpay](https://www.npmjs.com/package/react-native-razorpay)

# Other Libaries not used here

-   [@react-native-community/cameraroll](https://www.npmjs.com/package/@react-native-community/cameraroll)
-   [react-native-autogrow-textinput](https://www.npmjs.com/package/react-native-autogrow-textinput)
-   [react-native-calendars](https://www.npmjs.com/package/react-native-calendars)
-   [react-native-calendar-events](https://www.npmjs.com/package/react-native-calendar-events)
-   [react-native-camera-kit](https://www.npmjs.com/package/react-native-camera-kit)
-   [react-native-netinfo](https://www.npmjs.com/package/react-native-netinfo)

# Support Me

If you learnt something new and found this project helpful, consider [buying me a coffee](https://www.buymeacoffee.com/nish1896)
