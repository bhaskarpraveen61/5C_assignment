import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Input from '../Screens/Input.js'
import Repositories from '../Screens/Repositories.js'
import Followers from '../Screens/Followers.js'
import DetailedRepository from '../Screens/DetailedRepository.js'

const HomeStack = createNativeStackNavigator();
export default function Navigator() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator >
                    <HomeStack.Screen
                        name="Input"
                        component={Input}
                        options ={{
                          title:'Welcome',
                          headerStyle: {
                            backgroundColor: '#000dff',
                          },
                          headerTintColor:'#fff'
                        }}
                    />
                    <HomeStack.Screen
                        name="Repositories"
                        component={Repositories}
                        options ={{
                          title:'My Repositories',
                          headerStyle: {
                            backgroundColor: '#000dff',
                          },
                          headerTintColor:'#fff'
                        }}
                    />
                    <HomeStack.Screen
                        name="Followers"
                        component={Followers}
                        options ={{
                          title:'My Followers',
                          headerStyle: {
                            backgroundColor: '#000dff',
                          },
                          headerTintColor:'#fff'
                        }}
                    />
                    <HomeStack.Screen
                        name="DetailedRepository"
                        component={DetailedRepository}
                        options ={{
                          title:'Detailed Repository',
                          headerStyle: {
                            backgroundColor: '#000dff',
                          },
                          headerTintColor:'#fff'
                        }}
                    />

                </HomeStack.Navigator>
        </NavigationContainer>
    )
}
