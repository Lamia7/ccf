import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

// app
import { StatusBar } from "expo-status-bar";
import Separator from "../components/Separator";

// const imageCuttingPercentage = require("../assets/cuttingPercentage.jpg");
const imageBothCalculatingBudget = require("../assets/bothCalculatingBudget.jpg");

const options = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
const HomePage = () => {
  const [prixDeBase, onChangePrixDeBase] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState("");
  const [prixFinal, setPrixFinal] = useState("");

  /**
   * Calculate the offer and displays the final result
   * @param prixDeBase
   * @param pourcentage
   */
  const calculateOffer = (prixDeBase: string, pourcentage: string) => {
    const reduction = parseInt(prixDeBase) * (parseInt(pourcentage) * 0.01);
    setPrixFinal((parseInt(prixDeBase) - reduction).toString());
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenue sur "Combien ça fait" !</Text>
      <Separator />
      <Image
        source={imageBothCalculatingBudget}
        style={{ width: 200, height: 200 }}
      />

      {/* Main content */}
      <Text style={styles.labelText}>Vous paierez : {prixFinal} €</Text>
      <Text style={styles.labelText}>Prix de base : </Text>
      <TextInput
        onChangeText={onChangePrixDeBase}
        value={prixDeBase}
        keyboardType="numeric"
        placeholder="Entrez un prix"
        style={styles.inputStyle}
      />
      {/* <Percentage /> */}
      <View>
        <Text style={styles.labelText}>Pourcentage de réduction : </Text>
        <Picker
          onValueChange={(value) => {
            setSelectedPercentage(value);
          }}
          selectedValue={selectedPercentage}
        >
          {options.map((val, index) => (
            <Picker.Item label={`${val}%`} value={val} key={index} />
          ))}
        </Picker>
      </View>
      <Button
        title="calculer"
        onPress={() => calculateOffer(prixDeBase, selectedPercentage)}
        accessibilityLabel="Calculer le prix final après réduction"
        color="#EA7D40"
      >
        CALCULER
      </Button>
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
  labelText: {
    fontWeight: "700",
    color: "#3D3BB5",
  },
  inputStyle: {
    height: 70,
    width: 150,
    backgroundColor: "#E5E5E5",
    margin: 20,
  },
  btnCalculate: {
    backgroundColor: "#EA7D40",
  },
  button: {
    margin: 20,
  },
});

export default HomePage;
