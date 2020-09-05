import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
// import routes from "./routes";
import navigation from "./rootNavigation";
import NearbyResultsButton from "./NearbyResultsButton";
import CameraButton from "./CameraButton";
import AccountButton from "./AccountButton";
import HowItWorks from "../screens/HowItWorks";
// import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Camera"
        component={HowItWorks}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <CameraButton onPress={() => navigation.navigate("Camera")} />
          ),
        })}
      />
      <Tab.Screen
        name="Nearby"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AccountButton onPress={() => navigation.navigate("Nearby")} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NearbyResultsButton
              onPress={() => navigation.navigate("Account")}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
