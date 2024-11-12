import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavigationBar({ onNavigate }) {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Text style={styles.navItem}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Livro')}>
        <Text style={styles.navItem}>📚 Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => onNavigate('Add')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Calendario')}>
        <Text style={styles.navItem}>🔍 Calendário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Menu')}>
        <Text style={styles.navItem}>📖 Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
