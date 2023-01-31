import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    content: {
        width: "75%",
        height: 200,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 16,
        fontFamily: "Quicksand-SemiBold",
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 10,
    }
});