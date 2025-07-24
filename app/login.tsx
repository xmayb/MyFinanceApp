// app/login.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen() {
    const router = useRouter(); // Получаем объект для навигации

    const handleLoginPress = () => {
        // Эта функция будет вызываться при нажатии на кнопку
        // router.replace('/') перенаправит пользователя на корневой маршрут
        // (то есть на экран, который находится в файле index.tsx)
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Экран входа</Text>
            <Button
                title="Войти"
                onPress={handleLoginPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});
