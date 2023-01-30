import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";

import { Header } from "./components";
import { StartGame, Game } from "./screens";
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

  const onHandleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const Content = () =>
    userNumber ? (
      <Game userNumber={userNumber} />
    ) : (
      <StartGame onHandleStartGame={onHandleStartGame} />
    );

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Content />
    </View>
  );
};

export default App;
