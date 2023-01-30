import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants";
import { styles } from "./styles";

const generateRandomNumber = (min, max, excluded) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === excluded) {
    return generateRandomNumber(min, max, excluded);
  } else {
    return randomNumber;
  }
};

const Game = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userNumber));

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Número del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" onPress={() => {}} color={colors.secondaryButton} />
          <Button title="Mayor" onPress={() => {}} color={colors.secondaryButton} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
