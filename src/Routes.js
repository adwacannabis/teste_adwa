import React, { useCallback, useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './views/Home/Home';
import InfoPokemon from './views/InfoPokemon/InfoPokemon';

const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Stack.Navigator initialRouteName="Home"> 
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
                    <Stack.Screen name="InfoPokemon" component={InfoPokemon} />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

export default function Routes() {
    return (
        <SafeAreaProvider>
                <HomeStackScreen />
        </SafeAreaProvider>
    );
}