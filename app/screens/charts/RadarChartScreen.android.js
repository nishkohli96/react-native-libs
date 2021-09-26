import React from 'react';
import { StyleSheet, Text, View, processColor } from 'react-native';
import { RadarChart } from 'react-native-charts-wrapper';

import { ThemedContainer, ThemedBody, ThemedCard } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

class RadarChartScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {},
            legend: {
                enabled: true,
                textSize: 14,
                form: 'CIRCLE',
                wordWrapEnabled: true,
            },
        };
    }

    componentDidMount() {
        this.setState({
            data: {
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
            },
            xAxis: {
                valueFormatter: ['A', 'B', 'C', 'D', 'E'],
            },
        });
    }

    handleSelect(event) {
        let entry = event.nativeEvent;
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null });
        } else {
            this.setState({
                ...this.state,
                selectedEntry: JSON.stringify(entry),
            });
        }

        console.log(event.nativeEvent);
    }

    render() {
        return (
            <ThemedContainer>
                <Header title="Radar Chart" openDrawer />
                <ThemedBody>
                    <ThemedCard>
                        <View style={{ height: 80 }}>
                            <Text> selected entry</Text>
                            <Text> {this.state.selectedEntry}</Text>
                        </View>

                        <View style={styles.container}>
                            <RadarChart
                                style={styles.chart}
                                data={this.state.data}
                                xAxis={this.state.xAxis}
                                yAxis={{ drawLabels: true }}
                                chartDescription={{ text: '' }}
                                legend={this.state.legend}
                                drawWeb={true}
                                webLineWidth={5}
                                webLineWidthInner={5}
                                webAlpha={255}
                                webColor={processColor('red')}
                                webColorInner={processColor('green')}
                                skipWebLineCount={1}
                                onSelect={this.handleSelect.bind(this)}
                                onChange={event =>
                                    console.log(event.nativeEvent)
                                }
                            />
                        </View>
                    </ThemedCard>
                </ThemedBody>
            </ThemedContainer>
        );
    }
}

const styles = StyleSheet.create({
    chart: {
        width: 300,
        height: 600,
    },
});

export default RadarChartScreen;
