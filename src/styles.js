import { StyleSheet } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  }
});
