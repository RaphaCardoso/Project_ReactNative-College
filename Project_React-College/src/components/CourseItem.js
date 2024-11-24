import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CourseItem({ name, title, prof }) {

  const [professorName, setProfessorName] = useState();

  if (prof === null) {
    professorName = '';
  }


  useEffect(() => {
    const fetchProfessorName = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3100/prof/${prof}`);
        if (response) {
          console.log(response + " ========================================================================================");
          setProfessorName(response.nome);
        } else {
          setProfessorName('Professor não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar professor: ====================', error);
        setProfessorName('Erro ao carregar professor');
      }
    };

    fetchProfessorName();
  }, []);

  return (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.courseInstructor}>{name}</Text>
      <Text style={styles.courseInstructor}>{professorName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
