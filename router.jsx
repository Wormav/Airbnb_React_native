import { View, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import AroundMe from "./screens/AroundMe/AroundMe";

import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logo from "./assets/logo.png";
import Profil from "./screens/Profil/Profil";

export default function Router() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let textColor = focused ? "#F9575C" : "#717171";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "AroundMe") {
              iconName = "map-pin";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Feather name={iconName} size={size} color={textColor} />
                <Text style={{ color: textColor }}>{route.name}</Text>
              </View>
            );
          },
          tabBarActiveTintColor: "#F9575C",
          tabBarInactiveTintColor: "#717171",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
        <Tab.Screen
          name="AroundMe"
          component={AroundMe}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profil}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
