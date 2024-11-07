// Tela de Entrada

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const EntryScreen = ({ navigation }) => {
  const handleStundentLogin = () => {
    console.log("Logando como estudante");
  };

  const handleTeacherLogin = () => {
    console.log("Logando como professor");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/garoto_tela_incial.png")} />

      <Text style={styles.greetingText}>Olá :)</Text>
      <Text style={styles.descriptionText}>Fazer Login como:</Text>

      <TouchableOpacity
        style={styles.studentButton}
        onPress={handleStudentLogin}
      >
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.teacherButton}
        onPress={handleTeacherLogin}
      >
        <Text style={styles.buttonText}>Teacher</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 18,
    color: "#aaa",
    marginBottom: 24,
  },
  studentButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#FF4757",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  teacherButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default EntryScreen;
