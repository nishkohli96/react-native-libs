import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';

import { ThemedText } from '_Shared/Comps.themed';
import { useOnboardStore } from '_Store/onboard.store';

const IntroScreen = () => {
    const navigation = useNavigation(); /* Navigation Hook */
    const { setOnboardAction } = useOnboardStore();

    const gotoMainPage = async () => {
        setOnboardAction();
        navigation.navigate('DrawerNav');
    };

    const SkipBtn = () => {
        return <ThemedText style={styles.ctaBtn}>Skip</ThemedText>;
    };

    const NextBtn = () => {
        return <ThemedText style={styles.ctaBtn}>Next</ThemedText>;
    };

    const DoneBtn = () => {
        return (
            <ThemedText style={styles.ctaBtn} onPress={() => gotoMainPage()}>
                Done
            </ThemedText>
        );
    };

    const PageImage = () => (
            <Image
                source={require('_Images/hi.png')}
                style={styles.image}
            />
    );
    
    const InternetImage = () => (
        <Image
            source={{ uri: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}}
            style={styles.image}
        />
    );

    /* Refer https://www.npmjs.com/package/react-native-onboarding-swiper  */

    return (
        <Onboarding
            onSkip={() => gotoMainPage()}
            onDone={() => gotoMainPage()}
            nextLabel={<NextBtn />}
            skipLabel={<SkipBtn />}
            DoneButtonComponent={DoneBtn}
            pages={[
                {
                    backgroundColor: 'skyblue',
                    image: <PageImage />,
                    title: 'Welcome to myApp',
                    subtitle: "I'm sure you would love it!!",
                },
                {
                    backgroundColor: 'red',
                    image: <PageImage />,
                    title: 'Easy to Customize',
                    subtitle: 'Everything properly documented',
                },
                {
                    backgroundColor: 'yellow',
                    image: <InternetImage />,
                    title: 'Enjoy....',
                    subtitle: 'Feel Free to Edit the Code and Experiment',
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        margin: 10,
    },
    subHeading: {
        fontSize: 15,
        margin: 5,
    },
    ctaBtn: {
        marginRight: 20,
        fontSize: 20,
    },
    image: {
        width: 250,
        height: 250,
    },
});

export default IntroScreen;