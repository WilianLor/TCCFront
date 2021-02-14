import React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons  , Feather , AntDesign, FontAwesome } from '@expo/vector-icons'; 

import { AddButton } from './styles'

import HomeScreen from '../pages/HomeScreen/index'
import metrics from '../styles/variables/metrics';

const Tab = createBottomTabNavigator()

function WalletScreen() {
    return (
        <Text>Wallet</Text>
    )
}

function ChartScreen() {
    return (
        <Text>Chart</Text>
    )
}

function UserScreen() {
    return (
        <Text>User</Text>
    )
}

function AddScreen() {
    return (
        <Text>Add</Text>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
			<Tab.Navigator  
            screenOptions={({ route }) => ({
                tabBarIcon: ({color}) => {

                    switch (route.name) {
                        case 'Home':
                            return <AntDesign   name="home" size={metrics.base * 7} color={color} />;
                        case 'Wallet':
                            return <Ionicons    name="md-wallet-outline" size={metrics.base * 7.5} color={color}  />;
                        case 'Add':
                            return <FontAwesome name="plus" size={metrics.base * 4} color="#fff" />;
                        case 'Chart':
                            return <Feather   name="pie-chart" size={metrics.base * 6.5} color={color}  /> ;
                        case 'User':
                            return <FontAwesome  name="user-o" size={metrics.base * 6} color={color}  />;
                        default:
                            return;
                    }
                },
            })}
                tabBarOptions={{
                activeTintColor: '#DC651A',
                inactiveTintColor: '#A9A9A9',
                showLabel: false,
            }}>
				<Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Wallet" component={WalletScreen} />
                <Tab.Screen
                    name="Add"
                    component={AddScreen}
                    options={() => ({
                        tabBarIcon: () => (
                            <AddButton>
                                <FontAwesome name="plus" size={metrics.base * 4} color="#fff" />
                            </AddButton>
                        ),
                    })}
                />
                <Tab.Screen name="Chart" component={ChartScreen} />
                <Tab.Screen name="User" component={UserScreen} />
			</Tab.Navigator>
		</NavigationContainer>
    );
}