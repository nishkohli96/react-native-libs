import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IoniconsI from 'react-native-vector-icons/Ionicons';

import {
    ThemedContainer,
    ThemedBody,
    ThemedHeading,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';
import Header from '_Shared/Header';
import { useThemeStore } from '_Store/theme.store';
import CommonStyles from '_Themes/CommonStyles';

const RenderListRoutes = ({ headerTitle, routesArr }) => {
    const navigation = useNavigation();
    const { themeObj } = useThemeStore();

    return (
        <ThemedContainer>
            <Header title={headerTitle} openDrawer />
            <ThemedBody>
                <ThemedHeading>
                    Click on any of the items to proceed further
                </ThemedHeading>

                {routesArr.map((routeName, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.navigate(routeName.navigateRoute)
                        }>
                        <ThemedCard style={styles.card}>
                            <ThemedText>
                                {routeName.iconName && (
                                    <IoniconsI
                                        name={routeName.iconName}
                                        color={themeObj.colors.text}
                                        size={CommonStyles.icons.drawerIcon}
                                    />
                                )}{' '}
                                {routeName.label}
                            </ThemedText>
                        </ThemedCard>
                    </TouchableOpacity>
                ))}
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    card: { marginTop: 30, alignItems: 'center' },
});

RenderListRoutes.propTypes = {
    headerTitle: PropTypes.string,
    routesArr: PropTypes.array,
};

RenderListRoutes.defaultProps = {
    headerTitle: 'headerTitle',
    routesArr: [],
};

export default RenderListRoutes;
