import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
    width: "75%",
  },
  label: {
    fontSize: 15,
    color: colors.text,
    paddingVertical: 5,
    textAlign: "center",
  },
  input: {
    width: "30%",
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmedContainer: {
    width: "75%",
    height: 200,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 20,
  },
  confirmedTitle: {
    fontSize: 16,
  }
});
