import React from 'react';
import { Platform } from 'react-native';
import RenderListRoutes from '_Shared/RenderListRoutes';
import { ChartsList } from '_Constants/ListRoutes';

const Charts = () => {
    return (
        <RenderListRoutes
            headerTitle="Charts"
            routesArr={
                Platform.OS === 'android' ? ChartsList : ChartsList.slice(0, -2)
            }
        />
    );
};

export default Charts;
