import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginComponent from "../components/LoginComponent";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Navigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
