import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={{ maxWidth: 352, width: "100%" }}>
        <Text
          style={{
            ...styles.title,
            textAlign: width > 800 ? "left" : "center",
          }}
        >
          ¡Bienvenido!
        </Text>
        <Text
          style={{
            ...styles.subtitle,
            textAlign: width > 800 ? "left" : "center",
          }}
        >
          Convertite ahora en un agente Flexy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 62,
    marginBottom: 31,
    marginHorizontal: 24,
    alignItems: "center",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 32,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.5,
  },
});

export default Header;
