import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header({ greeting, username, profileImage }) {
  return (
    <View style={styles.header}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image style={styles.profileImage} source={profileImage} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
