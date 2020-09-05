import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import WelcomeSvg from "../components/WelcomeSvg";

function HindiWelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.SVGcontainer}>
        <WelcomeSvg />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>क्रिप्टोक्रॉप में आपका स्वागत है</Text>
        <Text style={styles.subtext}>मशीन सीखने के साथ कुशल खेती.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.registerText}>रजिस्टर करें</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginText}>लॉग इन करें</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "#142143",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  loginButton: {
    backgroundColor: "white",
    width: 271,
    height: 65,
    borderRadius: 7,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  registerText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  registerButton: {
    backgroundColor: "#1A2C70",
    width: 271,
    height: 65,
    borderRadius: 7,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
    top: 0,
  },
  subtext: {
    color: "#5A5A5A",
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    top: 30,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flex: 0.15,
    padding: 10,
    top: 15,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 70,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFB",
  },
});

export default HindiWelcomeScreen;
