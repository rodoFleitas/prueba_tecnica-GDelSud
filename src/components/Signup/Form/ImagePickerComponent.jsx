import React, { Fragment, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AddImageIcon from "../../../icons/AddImageIcon";
import CameraIcon from "../../../icons/CameraIcon";
import GaleryIcon from "../../../icons/GaleryIcon";
import DeleteIcon from "../../../icons/DeleteIcon";

const ImagePickerComponent = ({
  image,
  setImage,
  uploadImage,
  removeImage,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Fragment>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.actionsContainer}>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? "rgba(112, 101, 240, 0.9)"
                        : "rgba(112, 101, 240, 1)",
                    },
                    styles.button,
                  ]}
                  onPress={() => uploadImage()}
                >
                  <CameraIcon color={"#FFF"} />
                  <Text style={styles.textStyle}>Cámara</Text>
                </Pressable>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? "rgba(112, 101, 240, 0.9)"
                        : "rgba(112, 101, 240, 1)",
                    },
                    styles.button,
                  ]}
                  onPress={() => uploadImage("gallery")}
                >
                  <GaleryIcon color={"#FFF"} />
                  <Text style={styles.textStyle}>Galería</Text>
                </Pressable>
              </View>

              <View style={styles.dltBtnsContainer}>
                {image !== null && (
                  <Pressable
                    style={({ pressed }) => [
                      styles.button,
                      {
                        paddingVertical: 12,
                        marginRight: 10,
                        backgroundColor: pressed
                          ? "rgba(241, 17, 13, 0.8)"
                          : "rgba(241, 17, 13, 1)",
                      },
                    ]}
                    onPress={() => removeImage()}
                  >
                    <DeleteIcon color="#FFF" />
                  </Pressable>
                )}
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    {
                      flex: 1,
                      flexBasis: 0,
                      paddingVertical: 12,
                      backgroundColor: pressed
                        ? "rgba(241, 17, 13, 0.8)"
                        : "rgba(241, 17, 13, 1)",
                    },
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.inputContainer}>
        <Pressable
          onPress={() => setModalVisible(true)}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    maxWidth: 352,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  dltBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  textStyle: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "white",
    textAlign: "center",
    marginLeft: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
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
