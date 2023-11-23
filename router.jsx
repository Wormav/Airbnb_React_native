import { View, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import AroundMe from "./screens/AroundMe/AroundMe";
import Profil from "./screens/Profil/Profil";
import Room from "./screens/Room/Room";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logo from "./assets/logo.png";

export default function Router() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
            headerBackTitle: "",
          }}
        />
      </Stack.Navigator>
    );
  }

  function AroundMeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AroundMeScreen"
          component={AroundMe}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
        <Stack.Screen
          name="RoomAround"
          component={Room}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
            headerBackTitle: "",
          }}
        />
      </Stack.Navigator>
    );
  }

  function ProfileStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileScreen"
          component={Profil}
          options={{
            headerTitle: () => (
              <Image source={logo} style={{ width: 80, height: 40 }} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

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
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="AroundMe"
          component={AroundMeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
