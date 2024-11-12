import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseItem({ name, title }) {
  return (
    <View style={styles.courseItem}>
      <Text style={styles.courseInstructor}>{name}</Text>
      <Text style={styles.courseTitle}>{title}</Text>
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
