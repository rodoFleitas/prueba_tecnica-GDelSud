import React, { Fragment, useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

import ImagePickerComponent from "./ImagePickerComponent";
import EyeIcon from "../../../icons/eyeIcon";
import EyeCloseIcon from "../../../icons/EyeClosedIcon";

const Inputs = ({
  values,
  handleChange,
  errors,
  setFieldTouched,
  touched,
  image,
  uploadImage,
  removeImage,
  modalVisible,
  setModalVisible,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const errorHandling = (value) => {
    return values[value] !== "" && touched[value] && errors[value];
  };

  return (
    <Fragment>
      <View style={styles.inputContainer}>
        <ImagePickerComponent
          image={image}
          uploadImage={uploadImage}
          removeImage={removeImage}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            ...styles.input,
            ...(errorHandling("name")
              ? { borderColor: "#F1110D", color: "#F1110D" }
              : null),
          }}
          onChangeText={handleChange("name")}
          onChange={handleChange("name")}
          value={values.name}
          placeholder="Nombre y Apellido"
          onFocus={() => setFieldTouched("name")}
        />
        {errorHandling("name") && (
          <Text style={styles.errorTxt}>{errors.name}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            ...styles.input,
            ...(errorHandling("phone")
              ? { borderColor: "#F1110D", color: "#F1110D" }
              : null),
          }}
          onChangeText={handleChange("phone")}
          value={values.phone}
          placeholder="+54 9 221 000 0000"
          inputMode="numeric"
          onFocus={() => setFieldTouched("phone")}
        />
        {errorHandling("phone") && (
          <Text style={styles.errorTxt}>{errors.phone}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            ...styles.input,
            ...(errorHandling("email")
              ? { borderColor: "#F1110D", color: "#F1110D" }
              : null),
          }}
          onChangeText={handleChange("email")}
          value={values.email}
          placeholder="hola@tuemail.com"
          onFocus={() => setFieldTouched("email")}
          autoCapitalize="none"
          inputMode="email"
        />
        {errorHandling("email") && (
          <Text style={styles.errorTxt}>{errors.email}</Text>
        )}
      </View>
      <View style={[styles.inputContainer, { marginTop: 24 }]}>
        <View style={{ justifyContent: "center" }}>
          <TextInput
            style={{
              ...styles.input,
              ...{ marginTop: 0 },
              ...(errorHandling("password")
                ? { borderColor: "#F1110D", color: "#F1110D" }
                : null),
            }}
            onChangeText={handleChange("password")}
            value={values.password}
            placeholder="Ingresá tu contraseña"
            onFocus={() => setFieldTouched("password")}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
          <Pressable
            onPress={(e) => setSecureTextEntry(!secureTextEntry)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#EDEDED" : "transparent",
              },
              styles.securePswBtn,
            ]}
          >
            {secureTextEntry ? (
              <EyeIcon color="#9EA3AE" />
            ) : (
              <EyeCloseIcon color="#9EA3AE" />
            )}
          </Pressable>
        </View>
        {errorHandling("password") && (
          <Text style={styles.errorTxt}>{errors.password}</Text>
        )}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 24,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 352,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    backgroundColor: "#F7F7FD",
    borderColor: "#E0DEF7",
    color: "#000929",
    fontFamily: "PlusJakartaSans_500Medium",
    opacity: 0.5,
  },
  securePswBtn: {
    position: "absolute",
    alignSelf: "center",
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 100,
  },
  errorTxt: {
    color: "#F1110D",
    marginLeft: 5,
    fontFamily: "PlusJakartaSans_400Regular",
  },
});

export default Inputs;
