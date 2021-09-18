import React from 'react';
import Geolocation from 'react-native-geolocation-service';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

/*  
    Read about the lib setup here -
    https://github.com/Agontuk/react-native-geolocation-service/blob/HEAD/docs/setup.md
*/

const Location = () => {
    const [status, setStatus] = React.useState('');

    // const checkPermission = () => {
    //     check(PERMISSIONS.IOS.LOCATION_ALWAYS)
    //         .then(result => {
    //             switch (result) {
    //                 case RESULTS.UNAVAILABLE:
    //                     setStatus(
    //                         'This feature is not available (on this device / in this context)',
    //                     );
    //                     break;
    //                 case RESULTS.DENIED:
    //                     setStatus(
    //                         'The permission has not been requested / is denied but requestable',
    //                     );
    //                     break;
    //                 case RESULTS.LIMITED:
    //                     setStatus(
    //                         'The permission is limited: some actions are possible',
    //                     );
    //                     break;
    //                 case RESULTS.GRANTED:
    //                     setStatus('The permission is granted');
    //                     break;
    //                 case RESULTS.BLOCKED:
    //                     setStatus(
    //                         'The permission is denied and not requestable anymore',
    //                     );
    //                     break;
    //             }
    //         })
    //         .catch(error => {
    //             console.log('error: ', error);
    //         });
    // };
    

    /* Need to request position */
    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                setStatus(position);
            },
            error => {
                setStatus(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    getCurrentPosition();

    return (
        <ThemedContainer>
            <Header title="Location" />
            <ThemedBody>
                <ThemedText>
                    Enable permission to use device location. Current status -{' '}
                    {status}
                </ThemedText>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default Location;
