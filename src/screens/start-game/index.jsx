import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empezar</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un número.</Text>
        <TextInput style={styles.input} placeholder="0" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={() => null} color="#7B72AC" />
        <Button title="Confirmar" onPress={() => null} color="#5E548E" />
      </View>
    </View>
  );
};

export default StartGame;
