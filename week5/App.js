import * as react from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStrackNavigator } from "@react-navigation/native-stack";
import Email from "./pages/Email";
import HomeScreen from "./pages/HomeScreen";

const Strack = createNativeStrackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Email" component={Email} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}