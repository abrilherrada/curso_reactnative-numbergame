import { useState } from "react";
import { View } from "react-native";

import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";

const App = () => {
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

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Content />
    </View>
  );
};

export default App;
