import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

// app
import { StatusBar } from "expo-status-bar";
import Separator from "../components/Separator";

const discountImage = require("../assets/discountImage.jpg");

type Props = {};

const HomePage = (props: Props) => {
  const [prixDeBase, onChangePrixDeBase] = useState("");
  const [pourcentage, setPourcentage] = useState(50);
  const [prixFinal, setPrixFinal] = useState("");

  /**
   * Calculate the offer and displays the final result
   * @param prixDeBase
   * @param pourcentage
   */
  const calculateOffer = (prixDeBase: string, pourcentage: number) => {
    const reduction = parseInt(prixDeBase) * (pourcentage * 0.01);
    setPrixFinal((parseInt(prixDeBase) - reduction).toString());
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenue sur "Combien ça fait" !</Text>
      <Separator />
      <Image source={discountImage} style={{ width: 200, height: 200 }} />

      {/* Main content */}
      <TextInput
        onChangeText={onChangePrixDeBase}
        value={prixDeBase}
        keyboardType="numeric"
        placeholder="Entrez un prix"
      />
      <Button
        title="calculer"
        onPress={() => calculateOffer(prixDeBase, pourcentage)}
      >
        CALCULER
      </Button>
      <Text style={styles.inputStyle}>{prixFinal}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

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
  inputStyle: {
    height: 100,
    width: 100,
  },
});

export default HomePage;
