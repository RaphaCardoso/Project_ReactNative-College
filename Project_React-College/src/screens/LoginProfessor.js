import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormComponent from '../components/FormComponent';

const LoginProfessor = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleSignUp = () => setIsSignUp(!isSignUp);

  const handleSubmit = () => {
    
    navigation.navigate("ProfessorPage");
  };

  return (
    <View style={styles.container}>
      <FormComponent
        isSignUp={isSignUp}
        onToggleSignUp={handleToggleSignUp}
        userType="professor"
        onSubmit={handleSubmit} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20, justifyContent: "center" },
});

export default LoginProfessor;
