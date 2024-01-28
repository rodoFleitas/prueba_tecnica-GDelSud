import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StyleSheet} from "react-native";
import Constants from "expo-constants";
import Main from "./src/Main";

import {
    useFonts,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_400Regular,
} from "@expo-google-fonts/plus-jakarta-sans";

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        PlusJakartaSans_700Bold,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Main/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: Constants.statusBarHeight,
    },
});
