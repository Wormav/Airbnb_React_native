import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import s from "./room.styles";
import Icon from "react-native-vector-icons/Feather";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

export default function Room() {
  const [showMore, setShowMore] = useState(false);

  const route = useRoute();
  const { data } = route.params;

  return (
    <ScrollView vertical={true}>
      <View style={s.container}>
        <View style={s.pictureContainer}>
          <Swiper
            height={240}
            showsButtons={false}
            loop={false}
            autoplay={false}
            dot={<View style={s.dot} />}
            activeDot={<View style={s.activeDot} />}
          >
            {data.photos.map((photo, index) => (
              <View key={index} style={s.slide}>
                <Image style={s.picture} source={{ uri: photo.url }} />
              </View>
            ))}
          </Swiper>
          <Text style={s.price}>{data.price}€</Text>
        </View>
        <View style={s.infos}>
          <View style={s.titleContainer}>
            <Text numberOfLines={1} style={s.title}>
              {data.title}
            </Text>
            <View style={s.notation}>
              <StarRating rating={data.ratingValue} />
              <Text numberOfLines={1} style={s.reviews}>
                {data.reviews} reviews
              </Text>
            </View>
          </View>
          <Image
            style={s.profilPicture}
            source={{ uri: data.user.account.photo.url }}
          />
        </View>
        <Text numberOfLines={showMore ? 1000000000 : 3} style={s.description}>
          {data.description}
        </Text>
        <TouchableOpacity
          style={s.btnShow}
          onPress={() => setShowMore(!showMore)}
        >
          <Text style={s.textShow}>{showMore ? "Show less" : "Show more"}</Text>
          <Icon
            name={showMore ? "chevron-up" : "chevron-down"}
            size={20}
            color="#717171"
          />
        </TouchableOpacity>
        <View style={s.mapContainer}>
          <MapView
            style={s.map}
            initialRegion={{
              latitude: data.location[1],
              longitude: data.location[0],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: data.location[1],
                longitude: data.location[0],
              }}
              title={data.title}
              description={data.description}
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}
