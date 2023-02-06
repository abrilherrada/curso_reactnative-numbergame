import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    contentLandscape: {
        width: "80%",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 20,

    },
    content: {
        width: "75%",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    rounds: {
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 20,
        fontFamily: "Quicksand-Medium",
    },
});