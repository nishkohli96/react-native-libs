import React from 'react';
import { Button, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { ThemedContainer, ThemedBody, ThemedText } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

/*  
    Read about the lib setup here -
    https://github.com/Agontuk/react-native-geolocation-service/blob/HEAD/docs/setup.md
*/

const Location = () => {
    const [status, setStatus] = React.useState('');
    const [coords, setCoords] = React.useState({});

    const checkPermission = async () => {
        const result = await Geolocation.requestAuthorization('whenInUse');
        setStatus(result);
    };

    /* Need to request position */
    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(position);
                setCoords(position);
            },
            error => {
                setStatus(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    checkPermission();

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
                            ( {coords.coords.latitude}, {coords.coords.longitude} )
                        </ThemedText>
                    </View>
                )}
            </ThemedBody>
        </ThemedContainer>
    );
};

export default Location;
