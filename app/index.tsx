import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCirclePlus,
    faMicrophoneLines,
    faPiggyBank,
    faSackDollar
} from '@fortawesome/free-solid-svg-icons';
import DonutChart from './components/DonutChart';
import AddModalPlus from "./navigation/AddModalPlus";



// Путь к вашему компоненту





const MyScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>

                <Text style={styles.headerTitle}>11</Text>
                <Text style={styles.headerTitleMonday}>Monday</Text>
                <Text style={styles.headerNovember}>November 2044</Text>
                <TouchableOpacity style={styles.styleFaCirclePlus} onPress={() => setModalVisible(true)}>
                    <FontAwesomeIcon icon={faCirclePlus}  size={40}/>

                </TouchableOpacity>

                <AddModalPlus visible={modalVisible} onClose={() => setModalVisible(false)} />
                <FontAwesomeIcon icon={faMicrophoneLines} style={styles.styleFaMicriphoneLines} size={40}/>

            </View>

            <View style={styles.mainScreen}>
                <View style={styles.mainViewLeft}>
                    <Text style={styles.textExpenses}>Expenses:</Text>
                    <Text style={styles.dollartitleleft}>-86 544$</Text>
                    <FontAwesomeIcon icon={faSackDollar} style={styles.styleFaSackDollar} size={30} />

                </View>
                <View style={styles.mainViewRight}>
                    <Text style={styles.textIncome}>Income:</Text>
                    <Text style={styles.dollartitleright}>1 0000544$</Text>
                    <FontAwesomeIcon icon={faPiggyBank} style={styles.styleFaPiggyBank} size={30}/>

                </View>

                <View style={{position: 'absolute', top: '45%', left: '22%', width: 200}}>

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
        borderRadius:40,
        position: 'absolute',
        top: 60,
        left: 10,
        right: 10,
        height: 100,
        backgroundColor: '#fff5e1',
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
        right: 55,
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
        backgroundColor: '#1a2e35',//shading of the application
    },
    mainViewLeft: {
        width: 180,
        height: 100,
        overflow: 'scroll',
        backgroundColor: '#fff5e1',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        left: 10,
        position: 'absolute',
        padding: 35,
        paddingHorizontal: 50,
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
        width: 180,
        height: 100,
        overflow: 'scroll',
        backgroundColor: '#fff5e1',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        right: 10,
        position: 'absolute',
        padding: 35,
        paddingHorizontal: 50,
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
        left: 15,
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

