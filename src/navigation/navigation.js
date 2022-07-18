import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from '../screens/ToDoApp'
import HomeScreen from '../screens/Calculator'

const Stack = createStackNavigator();
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, }}/>
        </Stack.Navigator>
    )
};

export default function App() {
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}