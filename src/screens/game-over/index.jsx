import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { Card } from "../../components";
import { colors } from "../../constants";
import { styles } from "./styles";

const GameOver = ({ rounds, selectedNumber, onHandleRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener("change", statePortrait);

    return () => {
      suscription.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Card style={isPortrait ? styles.content : styles.contentLandscape}>
        <Image style={styles.image} source={require("../../../assets/game-over.png")} />
        <Text style={styles.rounds}>
          Te tomó {rounds} intentos llegar al número {selectedNumber}.
        </Text>
        <Button title="Volver a jugar" onPress={onHandleRestart} color={colors.primaryButton} />
      </Card>
    </View>
  );
};

export default GameOver;
