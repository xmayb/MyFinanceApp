import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Header from './index';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCirclePlus,
    faEnvelope,
    faMagnifyingGlass,
    faMicrophoneLines,
    faPiggyBank,
    faSackDollar
} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialIcons';
// Путь к вашему компоненту

class MyScreen extends React.Component<{ navigation: any }> {
    render() {
        let {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>11</Text>
                    <Text style={styles.headerTitleMonday}>Monday</Text>
                    <Text style={styles.headerNovember}>November 2024</Text>
                    <FontAwesomeIcon icon={faMicrophoneLines} style={styles.styleFaMicriphoneLines} size={40}/>
                    <FontAwesomeIcon icon={faCirclePlus} style={styles.styleFaCirclePlus} size={40}/>
                </View>


                <View style={styles.mainScreen}>
                    <View style={styles.mainViewLeft}>
                        <Text style={styles.textExpenses}>Expenses</Text>
                        <FontAwesomeIcon icon={faSackDollar} style={styles.styleFaSackDollar} size={30} />

                    </View>
                    <View style={styles.mainViewRight}>
                        <Text style={styles.textIncome}>Income</Text>
                        <FontAwesomeIcon icon={faPiggyBank} style={styles.styleFaPiggyBank} size={30}/>

                    </View>

                    <Text>Содержимое экsdsн</Text>


                </View>


            </View>
        );
    };
}
//creating pie chart
const ProfileIndex = () => {
    const [usd, setUsd] = useState('1000');
    const [sc,setSc] = useState('500');
    const [transactions, setTransactions] = useState([
        {id: 1, name: 'Payment to Alice', amount: '200', date: '2023-07-15', type: 'sent'},
        {id: 2, name: 'Payment from Bob', amount:'300', date:'2023-07-16', type: 'received'},

    ]);
    const [sentAmount, setSentAmount] = useState(0);
    const [receivedAmount, setReceivedAmount] = useState(0);
}
//pie chart adjustments






////

const styles = StyleSheet.create({
    //Top of the phone
    header: {
        borderRadius:30,
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        zIndex: 1,
    },
    headerTitle: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        fontSize: 60,
        fontWeight: 'bold',
    },
    headerTitleMonday: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        left: 70,
        bottom: 50,
        fontSize: 30,

    },
    headerNovember: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        left: 70,
        bottom: 20,
        fontSize: 30,
    },
    mainPage: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    //MainView of the page
    mainView: {
        backgroundColor: 'green',
    },
    textExpenses1: {
        fontSize: 10,
    },
//adjust fontawesome
    styleFaMicriphoneLines: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        right: 70,
        top: 30,
    },
    styleFaCirclePlus: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        right: 15,
        top: 30,
    },
    //
    mainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    mainViewLeft: {
        backgroundColor: 'lightblue',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        padding: 40,
        paddingHorizontal: 95,
        borderRadius: 30,
        top: 175,
    },
    textExpenses: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        fontSize: 20,
        top: 15,
    },
    mainViewRight: {
        backgroundColor: 'lightblue',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        right: 0,
        position: 'absolute',
        padding: 40,
        paddingHorizontal: 95,
        borderRadius: 30,
        top: 175,
    },
    textIncome: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        fontSize: 20,
        top: 15,
    },
    //adjust fontawesome
    styleFaPiggyBank: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        left: 20,
        top: 10,
    },
    styleFaSackDollar: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        left: 20,
        top: 10,
    },
    //pie chart styles
    container: {
        flex: 1,
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        margin: 10,
    }
});

export default MyScreen;
