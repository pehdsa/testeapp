import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../config';

const Stack = createStackNavigator();

import Home from '../pages/Home';
import Extract from '../pages/Extract';

export default function App() {
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="App">
                
                <Stack.Screen 
                    name="Home" 
                    component={ Home } 
                    options={{ headerShown: false }} 
                />

                <Stack.Screen 
                    name="Extract" 
                    component={ Extract } 
                    options={{ 
                        headerTitleAlign: 'left',
                        headerTitleStyle: { fontSize: 18, color: theme.colors.default, fontWeight: 'bold' ,overflow: 'hidden' },
                        headerStyle: { 
                            height: 95, 
                            backgroundColor: '#FFF', 
                            shadowColor: 'transparent',
                            shadowRadius: 0,
                            elevation: 0,
                        },      
                        headerBackTitle: "",
                        cardOverlayEnabled: true,
                        cardShadowEnabled: true,
                        cardStyle: {
                            backgroundColor: theme.colors.defaultBg
                        }
                    }} 
                />

				
			</Stack.Navigator>
		</NavigationContainer>
	);
  }