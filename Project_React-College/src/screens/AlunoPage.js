import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import LibraryBanner from '../components/LibaryBanner';
import CourseItem from '../components/CourseItem';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';

export default function AlunoPage({ route, navigation }) {
  const { loginData } = route.params;
  const [courses, setCourses] = useState([]); // Estado para armazenar os cursos
  const name = loginData.data.aluno.nome;
  const ra = loginData.data.aluno.ra;

  useEffect(() => {
    // Função para buscar os cursos da API
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3100/materia');

        if (response.data && response.data.materias) {
          const extractedCourses = [];
          response.data.materias.forEach((materia) => {
            extractedCourses.push({
              profID: materia.profID || "Sem professor",
              descricao: materia.descricao || "Sem Descrição",
              materia: materia.materia || "Curso Sem Título",
            });
          });
          setCourses(extractedCourses); // Atualizando o estado com os dados extraídos
        } else {
          console.error('Estrutura de dados inesperada:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCourses();
  }, []); // Atualiza sempre que o RA mudar

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          greeting="QUE BOM QUE VOLTOU,"
          username={name}
          ra={ra}
          profile="aluno"
        />

        <LibraryBanner
          title="Livros disponíveis"
          subtitle="na Biblioteca!"
          onPress={() => console.log("Ver livros clicado")}
        />

        <View style={styles.courseSection}>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <CourseItem
                key={index} // Use o índice como chave (ou outro identificador único, como `_id`)
                name={course.descricao} // Nome do professor
                title={course.materia} // Nome do curso
                prof={course.profID}
              />
            ))
          ) : (
            <Text style={styles.noCoursesText}>Nenhum curso encontrado.</Text>
          )}
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
  noCoursesText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
});
