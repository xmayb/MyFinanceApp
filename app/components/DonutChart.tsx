import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

const pieData = [
    {
        value: 47,
        color: '#009FFF',
        gradientCenterColor: '#006DFF',
        focused: true,
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
];

const colors = ['#f94144', '#f3722', '#90be6d'];

export default function DonutChart() {
    return (
        <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, left: 40, top: 60, bottom: 0}}>
            <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                radius={140}
                innerRadius={120}
                innerCircleColor={'#232B5D'}
                centerLabelComponent={() => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                                47%
                            </Text>
                            <Text style={{fontSize: 14, color: 'white'}}>Total</Text>
                        </View>
                    );
                }}
            />

        </View>
    );
}
