import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";

type addModalProps = {
    visible: boolean;
    onClose: () => void;
};

export default function AddModalPlus({visible, onClose}: addModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text>Add something</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

    },
    modalContent: {
        margin: 20,
        padding: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        bottom: 50,
    },
    closeText: {
        marginTop: 15,
        color: 'blue',
    }
});
