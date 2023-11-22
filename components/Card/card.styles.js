import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    position: "relative",
    marginTop: 10,
    marginBottom: 30,
    borderBottomColor: "#E7E7E7",
    borderBottomWidth: 3,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  infos: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "95%",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "80%",
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    overflow: "hidden",
    maxWidth: "100%",
  },
  notation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  profilPicture: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  price: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    position: "absolute",
    top: 140,
    left: 30,
  },
});

export { s };
