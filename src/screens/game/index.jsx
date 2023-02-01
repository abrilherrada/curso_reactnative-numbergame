import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
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

const Game = ({ userNumber, onHandleGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) onHandleGameOver(rounds);
  }, [currentGuess, userNumber, onHandleGameOver]);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("¡Por ahí no es!", "Sabes que eso es incorrecto.", [
        { text: "Volver", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const newGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(newGuess);
    setRounds((rounds) => rounds + 1);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Número del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Menor"
            onPress={() => onHandleNextGuess("lower")}
            color={colors.secondaryButton}
          />
          <Button
            title="Mayor"
            onPress={() => onHandleNextGuess("higher")}
            color={colors.secondaryButton}
          />
        </View>
      </Card>
    </View>
  );
};

export default Game;
