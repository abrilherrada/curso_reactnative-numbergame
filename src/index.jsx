import { useState } from "react";
import { ActivityIndicator, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

import { Header } from "./components";
import { StartGame, Game, GameOver } from "./screens";
import { styles } from "./styles";
import { colors } from "./constants";

const App = () => {
  const [loaded] = useFonts({
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);
  const [guessingRounds, setGuessingRounds] = useState(0);

  const onHandleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onHandleGameOver = (rounds) => {
    setGuessingRounds(rounds);
  };

  const onHandleRestart = () => {
    setUserNumber(null);
    setGuessingRounds(0);
  };

  const Content = () => {
    if (userNumber && guessingRounds <= 0) {
      return <Game userNumber={userNumber} onHandleGameOver={onHandleGameOver} />;
    }

    if (guessingRounds > 0) {
      return (
        <GameOver
          onHandleRestart={onHandleRestart}
          rounds={guessingRounds}
          selectedNumber={userNumber}
        />
      );
    }

    return <StartGame onHandleStartGame={onHandleStartGame} />;
  };

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        <Content />
      </View>
    </SafeAreaView>
  );
};

export default App;
