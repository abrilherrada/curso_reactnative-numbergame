import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";
import Card from "../../components/card";
import { colors } from "../../constants";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empezar</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un número</Text>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="0" />
        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={() => null} color={colors.secondaryButton} />
          <Button title="Confirmar" onPress={() => null} color={colors.primaryButton} />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
