// app/login.tsx
import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, TextInput, Pressable} from 'react-native';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';


export default function LoginScreen() {
    const router = useRouter(); // Получаем объект для навигации

    const handleLoginPress = () => {
        // Эта функция будет вызываться при нажатии на кнопку
        // router.replace('/') перенаправит пользователя на корневой маршрут
        // (то есть на экран, который находится в файле index.tsx)
        router.replace('/');
    };

    const {height, width } = Dimensions.get('window');
    const imagePosition = useSharedValue(1);
    const [isRegistering, setIsRegistering] = useState(false);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
        return {
            transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
        };
    });

    const buttonsAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
        return {
        opacity: withTiming(imagePosition.value, {duration: 500}),
            transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
        };
    });

    const closeButtonContainerStyle = useAnimatedStyle(() => {
        const  interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
        return{
            opacity: withTiming(imagePosition.value === 1 ? 0: 1, {duration: 800}),
            transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
        }
    })

    const formAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: imagePosition.value === 0
                ? withDelay(400, withTiming(1, {duration: 800}))
                :withTiming(0, {duration: 300})
        };
    });

    const loginHandler = () => {
        imagePosition.value = 0;
        if(isRegistering) {
            setIsRegistering(false);
        }
    };

    const registerHandler = () => {
        imagePosition.value = 0;
        if(!isRegistering) {
            setIsRegistering(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
                <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
                    <Svg height={height + 100} width={width}>
                        <ClipPath id="clipPathId">
                            <Ellipse cx={width /2} rx={height} ry={height + 100}/>
                        </ClipPath>
                        <Image href={require('../assets/images/kristof-bogar-C_F_BKYc25Q-unsplash.jpg')}
                               width={width + 100}
                               height={height + 100}
                                preserveAspectRatio="xMidYMid slice"
                               clipPath="url(#clipPathId"
                        />
                    </Svg>
                    <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
                        <Text onPress={() => imagePosition.value = 1}>X</Text>
                    </Animated.View>
                </Animated.View>
                <View style={styles.bottomContainer}>
                    <Animated.View style={buttonsAnimatedStyle}>
                        <Pressable onPress={loginHandler} style={styles.button}>
                            <Text style={styles.buttonText}> LOG IN</Text>
                        </Pressable>
                    </Animated.View>
                    <Animated.View style={buttonsAnimatedStyle}>
                        <Pressable onPress={registerHandler} style={styles.button}>
                            <Text   style={styles.buttonText}>Register</Text>
                        </Pressable>
                    </Animated.View>

                <Animated.View style={[styles.formInputeContainer, formAnimatedStyle]}>

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        style={styles.textinput}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={styles.textinput}
                    />



                    <View style={styles.formButton}>

                        <Pressable onPress={handleLoginPress} >
                            <Text   style={styles.buttonText}>{isRegistering ? 'Register' : 'Log In'}</Text>
                        </Pressable>

                    </View>
                    </Animated.View>
                </View>


        </SafeAreaView>

    );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-end',

    },
    header: {
        backgroundColor: '#e8ecf4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg: {
        width: 130,
        height: 130,
    },
    title: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        justifyContent: 'center',
        height: 55,
        alignItems: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5,
    },
    bottomContainer: {
        justifyContent: 'center',
        height: height / 3,
    },
    textinput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.2)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        justifyContent: 'center',
        height: 55,
        alignItems: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    formInputeContainer: {
        marginBottom: 70,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        justifyContent: 'center',
    },
    closeButtonContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        top: -20,
    },
});


