import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Separator from "./components/Separator";

const discountImage = require("./assets/discountImage.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Bienvenue sur "Combien ça fait" !</Text>
      <Separator />
      <Image source={discountImage} style={{ width: 200, height: 200 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
