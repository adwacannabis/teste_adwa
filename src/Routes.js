import React, { useCallback, useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './views/Home';

const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
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
