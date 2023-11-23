import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import s from "./aroundMe.styles";
import { useNavigation } from "@react-navigation/native";

export default function AroundMe() {
  const [data, setData] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 48.85,
    longitude: 2.37,
  });
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigation();

  useEffect(() => {
    const askPermissionAndGetCoords = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        await Location.getCurrentPositionAsync();

        setCoordinates({
          latitude: 48.85,
          longitude: 2.37,
        });
      } else {
        alert("Accès refusé à la localisation");
      }

      setIsLoading(false);
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/around?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    askPermissionAndGetCoords();
    fetchData();
  }, []);

  const handlePress = (id) => {
    navigate.navigate("RoomAround", { id: id });
  };

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <MapView
        style={s.map}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation
      >
        {data.map((data) => {
          return (
            <Marker
              onPress={() => handlePress(data._id)}
              key={data._id}
              coordinate={{
                latitude: data.location[1],
                longitude: data.location[0],
              }}
              title={"Marker Title"}
              description={"Marker Description"}
            />
          );
        })}
      </MapView>
    </View>
  );
}
