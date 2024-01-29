import React from "react";
import { View, StyleSheet, Pressable, Platform } from "react-native";
import Logo from "../../public/Logo";
import MenuIcon from "../icons/MenuIcon";

const Navbar = ({ width }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        paddingVertical: Platform.OS !== "web" ? 12 : width < 960 ? 12 : 24,
      }}
    >
      <View>
        <Logo />
      </View>
      {(Platform.OS !== "web" || width < 960) && (
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#EDEDED" : "transparent",
            },
            styles.btn,
          ]}
        >
          <MenuIcon color="#000929" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 12,

    borderColor: "#F0EFFB",
    borderBottomWidth: 1.5,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 100,
  },
});

export default Navbar;
