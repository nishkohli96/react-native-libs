import React from 'react';
import { StyleSheet, View, processColor } from 'react-native';
import { RadarChart } from 'react-native-charts-wrapper';

import {
    ThemedContainer,
    ThemedBody,
    ThemedCard,
    ThemedText,
} from '_Shared/Comps.themed';
import Header from '_Shared/Header';

const RadarChartScreen = () => {
    const [legend] = React.useState({
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true,
    });

    const [xAxis] = React.useState({
        valueFormatter: ['A', 'B', 'C', 'D', 'E'],
    });

    const [data] = React.useState({
        dataSets: [
            {
                values: [
                    { value: 100 },
                    { value: 110 },
                    { value: 105 },
                    { value: 115 },
                    { value: 110 },
                ],
                label: 'DS 1',
                config: {
                    color: processColor('#FF8C9D'),
                    drawFilled: true,
                    fillColor: processColor('#FF8C9D'),
                    fillAlpha: 100,
                    lineWidth: 2,
                },
            },
            {
                values: [
                    { value: 115 },
                    { value: 100 },
                    { value: 105 },
                    { value: 110 },
                    { value: 120 },
                ],
                label: 'DS 2',
                config: {
                    color: processColor('#C0FF8C'),
                    drawFilled: true,
                    fillColor: processColor('#C0FF8C'),
                    fillAlpha: 150,
                    lineWidth: 1.5,
                },
            },
            {
                values: [
                    { value: 105 },
                    { value: 115 },
                    { value: 121 },
                    { value: 110 },
                    { value: 105 },
                ],
                label: 'DS 3',
                config: {
                    color: processColor('#8CEAFF'),
                    drawFilled: true,
                    fillColor: processColor('#8CEAFF'),
                },
            },
        ],
    });

    const [selectedEntry, setSelectedEntry] = React.useState('');

    const handleSelect = event => {
        let entry = event.nativeEvent;
        if (entry === null) {
            setSelectedEntry('');
        } else {
            setSelectedEntry(JSON.stringify(entry));
        }
        console.log(event.nativeEvent);
    };

    return (
        <ThemedContainer>
            <Header title="Radar Chart" openDrawer />
            <ThemedBody>
                <ThemedCard>
                    <View style={styles.textView}>
                        <ThemedText> selected entry</ThemedText>
                        <ThemedText> {selectedEntry}</ThemedText>
                    </View>

                    <View>
                        <RadarChart
                            style={styles.chart}
                            data={data}
                            xAxis={xAxis}
                            yAxis={{ drawLabels: true }}
                            chartDescription={{ text: '' }}
                            legend={legend}
                            drawWeb={true}
                            webLineWidth={5}
                            webLineWidthInner={5}
                            webAlpha={255}
                            webColor={processColor('red')}
                            webColorInner={processColor('green')}
                            skipWebLineCount={1}
                            onSelect={e => handleSelect(e)}
                            onChange={event => console.log(event.nativeEvent)}
                        />
                    </View>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    chart: {
        width: 300,
        height: 500,
    },
    textView: { height: 80 },
});

export default RadarChartScreen;
