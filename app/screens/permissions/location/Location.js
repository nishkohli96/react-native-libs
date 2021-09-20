import React, { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

/*  
    Read about the lib setup here -
    https://github.com/Agontuk/react-native-geolocation-service/blob/HEAD/docs/setup.md
*/

const Location = () => {
    /* Need to request position */
    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(position);
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }, []);

    return (
        <ThemedContainer>
            <Header title="Location" />
            <ThemedBody>
                <ThemedText>
                    Enable permission to use device location
                </ThemedText>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default Location;
