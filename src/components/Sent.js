import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Sent = ({ message }) => {
  return (
    <View style={StyleSheet.container}>
      <LinearGradient colors={["#f26a50", "#f20045"]} style={styles.gradient}>
        <Text style={styles.text}>{message}</Text>
      </LinearGradient>
      <Text style={styles.duration}>12:34 AM</Text>
    </View>
  );
};

export default Sent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  duration: {
    color: "#b6b6b6",
    fontSize: 11,
    marginTop: 5,
    fontFamily: "Montserrat_600SemiBold",
    alignSelf: "flex-end",
  },
  gradient: {
    maxWidth: 220,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignSelf: "flex-end",
  },
  text: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
});
