import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCirclePlus,
    faMicrophoneLines,
    faPiggyBank,
    faSackDollar
} from '@fortawesome/free-solid-svg-icons';
import DonutChart from './components/DonutChart';



// Путь к вашему компоненту





const myScreen = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>

                <Text style={styles.headerTitle}>11</Text>
                <Text style={styles.headerTitleMonday}>Monday</Text>
                <Text style={styles.headerNovember}>November 2025</Text>
                <FontAwesomeIcon icon={faMicrophoneLines} style={styles.styleFaMicriphoneLines} size={40}/>
                <FontAwesomeIcon icon={faCirclePlus} style={styles.styleFaCirclePlus} size={40}/>
            </View>

            <View style={styles.mainScreen}>
                <View style={styles.mainViewLeft}>
                    <Text style={styles.textExpenses}>Expenses:</Text>
                    <Text style={styles.dollartitleleft}>-86 544$</Text>
                    <FontAwesomeIcon icon={faSackDollar} style={styles.styleFaSackDollar} size={30} />

                </View>
                <View style={styles.mainViewRight}>
                    <Text style={styles.textIncome}>Income:</Text>
                    <Text style={styles.dollartitleright}>1 000 544$</Text>
                    <FontAwesomeIcon icon={faPiggyBank} style={styles.styleFaPiggyBank} size={30}/>

                </View>

                <View style={{position: 'absolute', top: '45%', left: '42%'}}>

                    <DonutChart />
                </View>


            </View>
        </View>
    );
}


//creating pie chart

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
    //here we are able to change the screen background
    mainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232B5D',//shading of the application
    },
    mainViewLeft: {
        width: 190,
        height: 100,
        overflow: 'scroll',
        backgroundColor: 'lightblue',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        padding: 30,
        paddingHorizontal: 60,
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
    dollartitleleft: {
        fontSize: 20,
        top: 10,
    },
    dollartitleright: {
        fontSize: 20,
        top: 10,
    },
    mainViewRight: {
        width: 190,
        height: 100,
        overflow: 'scroll',
        backgroundColor: 'lightblue',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        right: 0,
        position: 'absolute',
        padding: 30,
        paddingHorizontal: 60,
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
export default myScreen;

