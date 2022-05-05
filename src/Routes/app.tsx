import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/index';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
import RegisterExpense from '../screens/RegisterExpense';
import RegisterRecipes from '../screens/RegistrationRecipes';

const Stack = createNativeStackNavigator();

function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component = { Home } options={{  headerShown: false }} />
        <Stack.Screen name="Login" component = { Login } options={{  headerShown: false }}/>
        <Stack.Screen name="Register" component ={  Register } options={{  headerShown: false }}/>
        <Stack.Screen name="RegisterExpense" component = { RegisterExpense } options={{  headerShown: false }}/>
        <Stack.Screen name="RegisterRecipes" component ={  RegisterRecipes } options={{  headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;