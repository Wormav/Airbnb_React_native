import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Router from "./router";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Import SafeAreaProvider

export default function App() {
  const [user, setUser] = useState();
  const [userStorage, setUserStorage] = useState();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        setUserStorage(JSON.parse(user));
      } catch (error) {
        console.error("Erreur de récupération AsyncStorage :", error);
      }
    };

    getUser();

    const storeUser = async () => {
      if (user && !userStorage) {
        try {
          await AsyncStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
          console.error("Erreur de stockage AsyncStorage :", error);
        }
      }
    };

    storeUser();
  }, [user]);

  return userStorage ? (
    <Router />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" options={{ headerShown: false }}>
          {(props) => <SignIn {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{ headerShown: false }}>
          {(props) => <SignUp {...props} setUser={setUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
