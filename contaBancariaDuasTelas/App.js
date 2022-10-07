import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from './src/pages/Formulario';
import Informacoes from './src/pages/Informacoes';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta:" component={Formulario} />
        <Stack.Screen name="Informações:" component={Informacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}