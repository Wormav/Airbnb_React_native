import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./card.styles";
import StarRating from "../StarRating/StarRating";
import { useNavigation } from "@react-navigation/native";

export default function Card({ data }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Room", { id: data._id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={s.container}>
      <Image style={s.image} source={{ uri: data.photos[0].url }} />
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
      <Text style={s.price}>{data.price}€</Text>
    </TouchableOpacity>
  );
}
