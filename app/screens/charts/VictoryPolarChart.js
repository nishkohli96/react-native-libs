import React from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryLabel,
    VictoryGroup,
    VictoryArea,
    VictoryPolarAxis,
} from 'victory-native';

import { ThemedContainer, ThemedBody, ThemedCard } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

/* 
    Dedicated Example link ->
    https://formidable.com/open-source/victory/gallery/radar-chart/
*/

const VictoryPolarChart = () => {
    const characterData = [
        {
            key1: 56,
            key2: 80,
            key3: 45,
            key4: 60,
            key5: 36,
            key6: 80,
            key7: 24,
            key8: 38,
            key9: 52,
        },
    ];

    const getMaxima = data => {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map(d => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = 100; //Math.max(...groupedData[key]);
            return memo;
        }, {});
    };

    const processData = data => {
        const maxByGroup = getMaxima(data);

        const makeDataArray = d => {
            return Object.keys(d).map(key => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };

        return data.map(datum => makeDataArray(datum));
    };

    const data = processData(characterData);
    const maxima = getMaxima(characterData);

    return (
        <ThemedContainer>
            <Header title="Victory Polar Chart" />
            <ThemedBody>
                <ThemedCard>
                    <VictoryChart
                        polar
                        width={350}
                        theme={VictoryTheme.material}
                        domain={{ y: [0, 1] }}>
                        <VictoryGroup
                            colorScale={['gold']}
                            style={{
                                data: { fillOpacity: 0.2, strokeWidth: 2 },
                            }}>
                            {data.map((data, i) => {
                                return <VictoryArea key={i} data={data} />;
                            })}
                        </VictoryGroup>
                        {Object.keys(maxima).map((key, i) => {
                            return (
                                <VictoryPolarAxis
                                    key={i}
                                    dependentAxis
                                    style={{
                                        axisLabel: { padding: 15 },
                                        axis: { stroke: 'none' },
                                        grid: {
                                            stroke: '#959fa8',
                                            strokeWidth: 2,
                                            // opacity: 0.5,
                                        },
                                    }}
                                    tickLabelComponent={
                                        <VictoryLabel
                                            labelPlacement="vertical"
                                            style={{ display: 'none' }}
                                        />
                                    }
                                    labelPlacement="perpendicular"
                                    axisValue={i + 1}
                                    label={key}
                                    tickFormat={t => Math.ceil(t * maxima[key])}
                                    tickValues={[0.2, 0.4, 0.6, 0.8]}
                                />
                            );
                        })}
                        <VictoryPolarAxis
                            labelPlacement="parallel"
                            tickFormat={() => ''}
                            style={{
                                axis: { stroke: 'grey' },
                                grid: { stroke: 'red', opacity: 0.8 },
                            }}
                        />
                    </VictoryChart>
                </ThemedCard>
            </ThemedBody>
        </ThemedContainer>
    );
};

export default VictoryPolarChart;
