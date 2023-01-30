import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";

import { styles } from "./styles";
import Card from "../../components/card";
import { colors } from "../../constants";

export const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const onHandleChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Empieza a jugar</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Escribe un número</Text>
          <TextInput
            value={enteredValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandleChange}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={() => null} color={colors.secondaryButton} />
            <Button title="Confirmar" onPress={() => null} color={colors.primaryButton} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
