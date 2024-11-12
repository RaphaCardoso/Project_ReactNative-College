import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormComponent from '../components/FormComponent';

const LoginAluno = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleSignUp = () => setIsSignUp(!isSignUp);

  const handleSubmit = () => {
    
    navigation.navigate("AlunoPage");
  };

  return (
    <View style={styles.container}>
      <FormComponent
        isSignUp={isSignUp}
        onToggleSignUp={handleToggleSignUp}
        userType="aluno"
        onSubmit={handleSubmit} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20, justifyContent: "center" },
});

export default LoginAluno;
