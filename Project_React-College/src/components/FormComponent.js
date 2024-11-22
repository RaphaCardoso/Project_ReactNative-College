import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from 'axios';

const FormComponent = ({ isSignUp, onToggleSignUp, userType, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    if (isSignUp) {
      console.log("Confirm Password:", confirmPassword);
      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem!");
        return;
      }
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      onSubmit();
    } else {
      return;
    }
  };

  const enviarCadastro = async () => {

    const novoCadastro = { nome: username, senha: password };

    axios.post('http://10.0.2.2:3100/aluno', novoCadastro).then(resposta => {
      if (resposta.status === 201) {
        setUsername = '';
        setPassword = '';
        setConfirmPassword = '';

      } else {
        Alert.alert('Erro. falha ao adicionar cadastro!');
        return;
      }
    });

  }

  const enviarLogin = async () => {
    const novoCadastro = { ra: username, senha: password };

    axios.post('http://localhost:3100/aluno/login', novoCadastro).then(resposta => {
      if (resposta.status === 201) {
        setUsername = '';
        setPassword = '';
        setConfirmPassword = '';

      } else {
        Alert.alert('Erro. falha ao adicionar cadastro!');
        return;
      }
    });
  };


  return (
    <View>
      <Text style={styles.title}>{isSignUp ? "Login" : "Login"}</Text>
      <TextInput
        placeholder={userType === "aluno" ? "R.A" : "Matrícula"}
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {isSignUp && (
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={isSignUp ? enviarCadastro : enviarLogin}>
        <Text style={styles.buttonText}>{isSignUp ? "Login" : "Login"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onToggleSignUp}>
        <Text style={styles.toggleText}>
          {isSignUp ? "Já tem conta? Faça seu Login" : "Não tem conta? Faça seu cadastro"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, color: "#fff", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#333", color: "#fff", padding: 10, marginBottom: 15 },
  button: { backgroundColor: "#FF4757", padding: 15, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
  toggleText: { color: "#aaa", textAlign: "center", marginTop: 10 },
});

export default FormComponent;
