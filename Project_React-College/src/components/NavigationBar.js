import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavigationBar({ onNavigate, activeRoute }) {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Icon 
          name="home" 
          size={20} 
          color={activeRoute === 'Home' ? '#E53935' : '#FFFFFF'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Livro')}>
        <Icon 
          name="book" 
          size={20} 
          color={activeRoute === 'Livro' ? '#E53935' : '#FFFFFF'} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => onNavigate('Add')}>
        <Icon name="add" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Calendario')}>
        <Icon 
          name="event" 
          size={20} 
          color={activeRoute === 'Calendario' ? '#E53935' : '#FFFFFF'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Menu')}>
        <Icon 
          name="menu-book" 
          size={20} 
          color={activeRoute === 'Menu' ? '#E53935' : '#FFFFFF'} 
        />
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
  addButton: {
    backgroundColor: '#FF5252',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
