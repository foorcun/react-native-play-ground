import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BoardHomeScreen } from "../../features/BoardHome/screens/BoardHomeScreen";
import { CardEditScreen } from "../../features/BoardHome/screens/CardEditScreen";
// import { LoginScreen } from "../../features/NavigationBase/screens/LoginScreen";
// import { RegisterScreen } from "../../features/NavigationBase/screens/RegisterScreen";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
  // screenOptions={{
  //   headerShown: false,
  // }}
  //   initialRouteName="Main"
  >
    <Stack.Screen
      name="Main"
      options={{ title: "Agile Board" }}
      component={BoardHomeScreen}
    />

    <Stack.Screen
      name="CardEditScreen"
      options={{ title: "CardEditScreen" }}
      component={CardEditScreen}
    />
    {/* <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} /> */}
  </Stack.Navigator>
);
