import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  pictureContainer: {
    width: "100%",
  },
  picture: { width: "100%", height: 270, position: "relative" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
    paddingBottom: 20,
    marginTop: -8,
  },

  infos: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "90%",
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
    fontSize: 25,
    position: "absolute",
    bottom: 10,
    left: 0,
  },
  description: {
    width: "90%",
    marginTop: 20,
  },
  btnShow: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  textShow: {
    color: "#717171",
  },
  dot: {
    backgroundColor: "#717171",
    width: 15,
    height: 15,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  mapContainer: {
    height: 250,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 30,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default s;
