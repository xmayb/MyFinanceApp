import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DonutChart from './components/DonutChart';

export default function ExpensesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Анализ трат</Text>
            <DonutChart />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
});
