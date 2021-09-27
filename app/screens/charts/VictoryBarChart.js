import React from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryLabel,
} from 'victory-native';
import { ThemedContainer, ThemedBody, ThemedCard } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

const data = [
    /* Label is optional */
    { quarter: 1, earnings: 13000, label: 'Q1' },
    { quarter: 2, earnings: 16500, label: 'Q2' },
    { quarter: 3, earnings: 14250, label: 'Q3' },
    { quarter: 4, earnings: 19000, label: 'Q4' },
];

const VictoryBarChart = () => {
    return (
        <ThemedContainer>
            <Header title="Bar Chart" openDrawer />
            <ThemedBody>
                <ThemedCard>
                    <VictoryChart width={350} theme={VictoryTheme.material}>
                        <VictoryBar
                            style={{ data: { fill: '#c43a31' } }}
                            data={data}
                            x="quarter"
                            y="earnings"
                            labelComponent={
                                <VictoryLabel
                                    dy={-20}
                                    backgroundStyle={{
                                        fill: 'gold',
                                        opacity: 0.6,
                                    }}
                                    backgroundPadding={{ bottom: 5, top: 5 }}
                                />
                            }
                        />
                    </VictoryChart>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default VictoryBarChart;
