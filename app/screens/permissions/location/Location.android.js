import React from 'react';
import { PermissionsAndroid, Button, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

/*  
    Read about the lib setup here -
    https://github.com/Agontuk/react-native-geolocation-service/blob/HEAD/docs/setup.md
*/

const Location = () => {
    /* Make sure to add relevant permissions in AndroidManifest.xml" */
    const [status, setStatus] = React.useState('');
    const [coords, setCoords] = React.useState({});

    const getLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location',
                    message: 'This app would like to get your location.',
                    buttonPositive: 'Accept',
                    buttonNegative: 'Cancel',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getCurrentPosition();
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                setCoords(position);
            },
            error => {
                setStatus(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    getLocationPermission();

    return (
        <ThemedContainer>
            <Header title="Location" />
            <ThemedBody>
                <ThemedText>
                    Device permission granted to use location. Current status -{' '}
                    {status}
                </ThemedText>
                <Button
                    title="Get position"
                    onPress={() => getCurrentPosition()}
                />
                {coords?.coords?.latitude && (
                    <View>
                        <ThemedText>Current Position is - </ThemedText>
                        <ThemedText>
                            ( {coords.coords.latitude},{' '}
                            {coords.coords.longitude} )
                        </ThemedText>
                    </View>
                )}
            </ThemedBody>
        </ThemedContainer>
    );
};

export default Location;
