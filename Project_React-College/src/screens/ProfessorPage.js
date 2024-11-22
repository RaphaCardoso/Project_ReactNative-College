import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import LibraryBanner from '../components/LibaryBanner';
import CourseItem from '../components/CourseItem';
import NavigationBar from '../components/NavigationBar';

export default function ProfessorPage({ navigation }) {
  const handleNavigate = (screen) => {
    navigation.navigate(screen); // Usar o método de navegação do React Navigation
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          greeting="BEM-VINDO DE VOLTA,"
          username="PROFº PAULO"
          profileImage={require('../assets/foto de perfil.png')}
        />

        <LibraryBanner
          title="Livros e Materiais disponíveis"
          subtitle="para seus alunos!"
          image={require('../assets/biblioteca.png')}
          onPress={() => console.log("Ver livros clicado")}
        />

        <View style={styles.courseSection}>
          <CourseItem name="Sem Professor" title="Lógica de Programação" />
          <CourseItem name="Sem Professor" title="Banco de Dados" />
          <CourseItem name="Sem Professor" title="Equações Diferenciais e Métodos Numéricos" />
        </View>
      </ScrollView>

      <NavigationBar onNavigate={handleNavigate} activeRoute="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 70,
  },
  courseSection: {
    marginVertical: 20,
  },
});
