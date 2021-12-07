import { StyleSheet } from "react-native";

const fontWeight = "400";

const SPTextInputStyle = StyleSheet.create({
    internalContainerStyle: {
    },
    titleTextStyle: {
        lineHeight: 20, // TODO:- value will be replaced once font constant file will be in place
        fontSize: 17,
        fontWeight,
    },
    textInputContainerStyle: {
        marginTop: 12,
        flexDirection: "row",
        borderRadius: 18,
        backgroundColor: "rgba(116, 116, 128, 0.08)", // TODO:- value will be replaced once color constant file will be in place
    },
    internalTextInputStyle: {
        flex: 1,
        marginTop: 12,
        marginBottom: 8,
        marginHorizontal: 16,
        lineHeight: 22, // TODO:- value will be replaced once font constant file will be in place
        fontSize: 17,
        fontWeight,
    },
    imageContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
    },
    internalLImageContainerStyle: {
        marginLeft: 16,
    },
    internalRImageContainerStyle: {
        marginRight: 16,
    },
    imageStyle: {
        height: 20,
        width: 20,
    },
});

export default SPTextInputStyle;
