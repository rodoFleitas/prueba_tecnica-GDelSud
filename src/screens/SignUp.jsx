import React, { Fragment } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import Header from "../components/Signup/Header";
import Form from "../components/Signup/Form/Form";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexGrow: Platform.OS !== "web" || width < 960 ? 1 : 0.7,
          flexBasis: 0,
        }}
      >
        <Navbar width={width} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAV}
        >
          <Pressable
            disabled={Platform.OS === "web"}
            style={{ cursor: "default" }}
            onPress={Platform.OS !== "web" ? Keyboard.dismiss : null}
          >
            <ScrollView>
              <Header />
              <Form />
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </View>

      {Platform.OS === "web" && width > 960 && (
        <ImageBackground
          style={styles.imgContainer}
          source={require("../../public/formBackground.jpg")}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  keyboardAV: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    flexBasis: 0,
  },
  imgContainer: {
    width: "100%",
    flexGrow: 1,
    flexBasis: 0,
    flex: 1,
    justifyContent: "center",
  },
});

export default SignUp;
