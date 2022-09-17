import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Holiday from '../screens/Holdiay';

const Stack = createNativeStackNavigator();

function Navigation() {

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Holiday" component={Holiday}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
