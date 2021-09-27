import React from 'react';
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { ThemedContainer, ThemedBody, ThemedCard } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

const LineChartScreen = () => {
    return (
        <ThemedContainer>
            <Header title="Line Chart" />
            <ThemedBody>
                <ThemedCard>
                    <LineChart
                        style={styles.chart}
                        data={{
                            dataSets: [
                                {
                                    label: 'demo',
                                    values: [{ y: 1 }, { y: 2 }, { y: 1 }],
                                },
                            ],
                        }}
                    />
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    chart: {
        width: 300,
        height: 600,
    },
});

export default LineChartScreen;
