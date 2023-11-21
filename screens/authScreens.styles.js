import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "start",
  },
  logo: {
    width: 150,
    height: 150,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    gap: 20,
  },
  boxSingUp: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 10,
  },
  title: {
    color: "#717171",
    fontSize: 27,
    marginTop: -10,
  },
  input: {
    position: "relative",
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 2,
    minWidth: "80%",
    marginBottom: 20,
  },
  passwordVisibilityIcon: {
    position: "absolute",
    bottom: 22,
    right: 10,
  },
  inputBig: {
    borderColor: "#FFBAC0",
    borderWidth: 2,
    width: "80%",
    marginBottom: 20,
    paddingVertical: 50,
  },
  error: {
    maxWidth: "80%",
    textAlign: "center",
    color: "red",
    fontSize: 15,
  },
  button: {
    borderColor: "#F9575C",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    text: {
      color: "#717171",
      fontSize: 15,
    },
  },
  link: {
    color: "#717171",
    paddingBottom: 50,
  },
});
