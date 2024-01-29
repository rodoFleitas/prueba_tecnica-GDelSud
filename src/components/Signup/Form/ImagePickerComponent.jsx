import React, { Fragment, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AddImageIcon from "../../../icons/AddImageIcon";

import ModalComponent from "./Modal";

const ImagePickerComponent = ({
  image,
  uploadImage,
  removeImage,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Fragment>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        image={image}
        uploadImage={uploadImage}
        removeImage={removeImage}
      />

      <View style={styles.inputContainer}>
        <Pressable
          onPress={() => {
            if (Platform.OS !== "web") {
              setModalVisible(true);
            } else if (image) {
              removeImage();
            } else {
              uploadImage("gallery");
            }
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#E0DEF7" : "#F7F7FD",
            },
            styles.btn,
          ]}
        >
          {image !== null ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 47,
                height: 47,
                borderRadius: 100,
              }}
            />
          ) : (
            <AddImageIcon />
          )}
        </Pressable>

        <Text style={styles.uploadMsg}>
          {image !== null
            ? "¡Foto cargada con éxito!"
            : "Subí tu foto de perfil"}
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 47,
    maxHeight: 47,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E0DEF7",
  },
  uploadMsg: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    color: "#000929",
    marginLeft: 9,
  },
});

export default ImagePickerComponent;
