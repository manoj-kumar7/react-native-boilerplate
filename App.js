import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './app/src/context/AuthContext'
import { setNavigator } from './app/src/navigationRef';
import ResolveAuthScreen from './app/src/screens/ResolveAuthScreen';
import SigninScreen from './app/src/screens/SigninScreen';
import SignupScreen from './app/src/screens/SignupScreen';

const switchNavigator = createSwitchNavigator({
    ResolveAuthScreen: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        Signup: SignupScreen
    })
})

const App = createAppContainer(switchNavigator);
export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
    )
}