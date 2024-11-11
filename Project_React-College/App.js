import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from './src/screens/EntryScreen';
import AlunoPage from './src/screens/AlunoPage';
import ProfessorPage from './src/screens/ProfessorPage';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen
          name="Entry"
          component={EntryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Aluno"
          component={AlunoPage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Professor"
          component={ProfessorPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
