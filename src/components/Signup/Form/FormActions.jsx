import React, { Fragment } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FormActions = ({ handleSubmit, values, isValid }) => {
  return (
    <Fragment>
      <View style={{ marginTop: 14, marginBottom: 29 }}>
        <Pressable onPress={() => {}}>
          {({ pressed }) => (
            <Text
              style={{
                ...styles.question,
                color: pressed ? "rgba(112, 101, 240, 0.7)" : "#7065F0",
              }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
          )}
        </Pressable>
      </View>

      <View
        style={{
          width: "100%",
          maxWidth: 352,
          ...(!isValid || values.email === ""
            ? { cursor: "not-allowed" }
            : null),
        }}
      >
        <Pressable
          disabled={!isValid || values.email === ""}
          style={({ pressed }) => [
            {
              backgroundColor:
                !isValid || values.email === ""
                  ? "rgba(112, 101, 240, 0.7)"
                  : pressed
                  ? "rgba(112, 101, 240, 0.9)"
                  : "#7065F0",
            },
            styles.btn,
          ]}
          onPress={handleSubmit}
        >
          <Text
            style={{
              ...styles.btnText,
              color:
                !isValid || values.email === ""
                  ? "rgba(255, 255, 255, 0.5)"
                  : "#FFFFFF",
            }}
          >
            Registrate
          </Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
        <Pressable onPress={() => {}}>
          {({ pressed }) => (
            <Text
              style={{
                ...styles.loginQuestion,
                color: pressed ? "rgba(0, 9, 41, 0.5)" : "#000929",
              }}
            >
              ¿Ya tenés una cuenta?
              <Text style={{ fontWeight: "bold" }}> Iniciá sesión</Text>
            </Text>
          )}
        </Pressable>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  question: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
    color: "#7065F0",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  loginQuestion: {
    fontFamily: "PlusJakartaSans_500Medium",
    textAlign: "center",
    fontSize: 14,
  },
});

export default FormActions;
