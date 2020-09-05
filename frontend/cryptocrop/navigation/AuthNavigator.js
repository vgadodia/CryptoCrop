import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HowItWorks from "../screens/HowItWorks";
import AppNavigator from "./AppNavigator";
import LanguageScreen from "../screens/LanguageScreen";
import HindiWelcomeScreen from "../screens/HindiWelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LanguageScreen"
      component={LanguageScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HindiWelcomeScreen"
      component={HindiWelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
