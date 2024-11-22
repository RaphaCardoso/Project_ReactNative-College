import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import FormComponent from '../components/FormComponent';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const LoginProfessor = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleSignUp = () => setIsSignUp(!isSignUp);

  const handleSubmit = () => {
    navigation.navigate("ProfessorPage");
  };

  const handleGoBack = () => {
    navigation.goBack(); // Voltar para a tela anterior
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
      <Icon name="arrow-back" size={30} color="#fff" />
    </TouchableOpacity>

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
  container: { 
    flex: 1, 
    backgroundColor: "#121212", 
    padding: 20, 
    justifyContent: "center" 
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#FF4757',
    borderRadius: 5,
  }
});

export default LoginProfessor;
