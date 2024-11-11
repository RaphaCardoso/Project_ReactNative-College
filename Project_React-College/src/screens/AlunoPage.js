import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';  

export default function AlunoPage() {
  const navigation = useNavigation();


  const navigateToHome = () => {
    navigation.navigate('Home');  
  };

  const navigateToLivro = () => {
    navigation.navigate('Livro');  
  };

  const navigateToCalendario = () => {
    navigation.navigate('Calendario'); 
  };

  const navigateToMenu = () => {
    navigation.navigate('Menu'); 
  };

  const navigateToAdd = () => {
 
    navigation.navigate('Add');  
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>QUE BOM QUE VOLTOU,</Text>
            <Text style={styles.username}>JORGE</Text>
          </View>
          <Image
            style={styles.profileImage}
            source={require("../assets/foto de perfil.png")}
          />
        </View>

        <View style={styles.libraryBanner}>
          <Text style={styles.libraryText}>Livros disponíveis</Text>
          <Text style={styles.librarySubtitle}>na Biblioteca!</Text>
          <Image 
            source={require("../assets/biblioteca.png")}
            style={styles.libraryImage}  
          />
          <TouchableOpacity style={styles.libraryButton}>
            <Text style={styles.libraryButtonText}>veja aqui ➔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.courseSection}>
          <Text style={styles.courseTitle}>AULAS</Text>
          <CourseItem name="Anderson Bosing" title="Programação Orientada a Objetos" />
          <CourseItem name="Juliane Frabel" title="Banco de Dados" />
          <CourseItem name="Paulo Santos" title="Equações Diferenciais e Métodos Numéricos" />
        </View>
      </ScrollView>

      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={navigateToHome}>
          <Text style={styles.navItem}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLivro}>
          <Text style={styles.navItem}>📚 Livro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAdd} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCalendario}>
          <Text style={styles.navItem}>🔍 Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMenu}>
          <Text style={styles.navItem}>📖 Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CourseItem({ name, title }) {
  return (
    <View style={styles.courseItem}>
      <Text style={styles.courseInstructor}>{name}</Text>
      <Text style={styles.courseTitle}>{title}</Text>
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
    paddingBottom: 70, // Deixe espaço para a barra de navegação fixada
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8, 
  },
  profileImage: {
    width: 110,
    height: 110,
  },
  libraryBanner: {
    backgroundColor: '#C62828',
    padding: 20,
    borderRadius: 40,
    marginVertical: 20,
    position: 'relative',  
  },
  libraryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  librarySubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  libraryImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 250,  
    height: 150, 
    borderRadius: 40   
  },
  libraryButton: {
    marginTop: 60,
    padding: 8,
    width: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  libraryButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  courseSection: {
    marginVertical: 20,
  },
  courseTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseItem: {
    backgroundColor: '#F4F7FA',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  courseInstructor: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  courseTitle: {
    color: '#E53935',
    fontSize: 16,
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2D2D2D',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
  },
  navItem: {
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#FF5252',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
