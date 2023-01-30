import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
        borderRadius: 5,
    },
    number : {
        fontSize: 20,
        fontFamily: "Quicksand-Bold",
    }
})