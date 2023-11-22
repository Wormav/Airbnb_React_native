import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default StarRating = ({ rating }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    let starName = i <= rating ? "star" : "star-o";
    stars.push(<Icon key={i} name={starName} size={20} color="#FFD700" />);
  }
  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};
