import React, { Fragment } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

import ImagePickerComponent from "./ImagePickerComponent";

const Inputs = ({
  values,
  handleChange,
  errors,
  setFieldTouched,
  touched,
  image,
  setImage,
  uploadImage,
  removeImage,
  modalVisible,
  setModalVisible,
}) => {
  const errorHandling = (value) => {
    return values[value] !== "" && touched[value] && errors[value];
  };

  return (
    <Fragment>
      <View style={styles.inputContainer}>
        <ImagePickerComponent
          image={image}
          setImage={setImage}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            ...styles.input,
            ...(errorHandling("password")
              ? { borderColor: "#F1110D", color: "#F1110D" }
              : null),
          }}
          onChangeText={handleChange("password")}
          value={values.password}
          placeholder="Ingresá tu contraseña"
          onFocus={() => setFieldTouched("password")}
          secureTextEntry={true}
          autoCapitalize="none"
        />
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
  errorTxt: {
    color: "#F1110D",
    marginLeft: 5,
    fontFamily: "PlusJakartaSans_400Regular",
  },
});

export default Inputs;
