import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import Inputs from "./Inputs";
import FormActions from "./FormActions";

const Form = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Minimo 4 caracteres")
      .max(50, "Llegaste al maximo")
      .required("Ingresa tu nombre y apellido"),
    phone: Yup.string()
      .required("Ingresa tu telefono/celular")
      .matches(
        /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/,
        "Numero invalido"
      ),
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email invalido")
      .required("Ingresa tu email"),
    password: Yup.string()
      .min(
        8,
        "Mínimo 8 caracteres, al menos un símbolo, un número y una mayúscula"
      )
      .required("Ingresa una contraseña")
      .matches(/^(?=.*\d)[a-zA-Z\d$@$!%*?&].{1,}$/, "Al menos un número")
      .matches(
        /^(?=.*[A-Z])(?=.*)[a-zA-Z\d$@$!%*?&].{1,}$/,
        "Al menos una mayúscula"
      )
      .matches(
        /^(?=.*[a-z])(?=.*)[a-zA-Z\d$@$!%*?&].{1,}$/,
        "Al menos una minúscula"
      )
      .matches(
        /^(?=.*[$@$!%*?&])([a-zA-Z\d$@$!%*?&]).{1,}$/,
        "Al menos un símbolo"
      ),
  });

  const uploadImage = async (mode) => {
    let result = {};
    try {
      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert(
        "Problemas al subir tu foto",
        "No hemos podido subir tu foto, intenta en otro momento.",
        [{ text: "Finalizar", onPress: () => setModalVisible(false) }]
      );
    }
  };

  const saveImage = async (image) => {
    try {
      setImage(image);
      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  const removeImage = async () => {
    try {
      setImage(null);
      setModalVisible(false);
    } catch (error) {
      Alert.alert(
        "Problemas al eliminar tu foto",
        "No hemos podido eliminar tu foto.",
        [{ text: "Finalizar", onPress: () => setModalVisible(false) }]
      );
    }
  };

  const submit = (values, resetForm) => {
    if (Platform.OS === "web") {
      alert(JSON.stringify(values));
    } else {
      Alert.alert("Tus datos", JSON.stringify(values), [
        { text: "Finalizar", onPress: () => resetForm() },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        onSubmit={(values, { resetForm }) => submit(values, resetForm)}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <Inputs
              values={values}
              handleChange={handleChange}
              errors={errors}
              setFieldTouched={setFieldTouched}
              touched={touched}
              image={image}
              uploadImage={uploadImage}
              removeImage={removeImage}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
            <FormActions
              handleSubmit={handleSubmit}
              values={values}
              isValid={isValid}
            />
          </Fragment>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 24,
  },
});

export default Form;
