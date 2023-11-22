import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Container from "../../components/Container";
import Card from "../../components/Card/Card";
import s from "./home.styles";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <View style={s.loadingContainer}>
          <ActivityIndicator size="large" color="#F9575C" />
        </View>
      </Container>
    );
  }

  if (error) {
    return <Text>Failed to load data</Text>;
  }

  return (
    <Container>
      <View style={s.cardContainer}>
        {data &&
          data.map((room) => {
            return <Card key={room._id} data={room} />;
          })}
      </View>
    </Container>
  );
}
