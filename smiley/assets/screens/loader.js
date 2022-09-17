import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native';

const AppLoader = () => {
    return(
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <AnimatedLottieView source={require('../animation/animation.json')} autoPlay loop style={styles.loader}/>
            <Text>Loading Please Be Patient</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        zIndex:1
    },
    loader:{
        height:100,
        width:100
    }
});

export default AppLoader;