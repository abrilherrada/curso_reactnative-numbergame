import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Card } from "../../components";
import { colors } from "../../constants";
import { styles } from "./styles";

const GameOver = ({ rounds, selectedNumber, onHandleRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
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
