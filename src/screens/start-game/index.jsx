import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";
import { NumberContainer } from "../../components";

export const StartGame = (onHandleStartGame) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandleChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandleReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const onHandleConfirm = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Número inválido", "El número ingresado debe estar entre 1 y 99.", [
        { text: "Aceptar", style: "destructive", onPress: onHandleReset },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  const onHandleStart = () => {
    onHandleStartGame(selectedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Número seleccionado</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Iniciar juego" onPress={onHandleStart} color={colors.primaryButton} />
      </Card>
    ) : null;

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
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={onHandleReset} color={colors.secondaryButton} />
            <Button title="Confirmar" onPress={onHandleConfirm} color={colors.primaryButton} />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
