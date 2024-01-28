import React, { Fragment } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Inputs from "./Inputs";
import FormActions from "./FormActions";

const Form = () => {
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
      .min(8, "Minimo 8 caracteres, al menos un numero y una mayuscula")
      .required("Ingresa una contraseña")
      .matches(/^(?=.*\d)[a-zA-Z\d]{1,}$/, "Al menos un numero")
      .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/, "Al menos una mayuscula"),
  });

  return (
    <View style={styles.container}>
      <Formik
        onSubmit={() => console.log("submit")}
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
