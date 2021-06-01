import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps{
  darktheme: boolean;
}

export function Header({ darktheme }: HeaderProps) {


  return (
    <View style={darktheme ? styles.headerDark : styles.header}>
      <Text style={darktheme ? styles.headerTextDark : styles.headerText}>to.</Text>
      <Text style={[darktheme ? styles.headerText : styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 54,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 54,
    backgroundColor: '#282B5A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },

  headerTextDark: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  }
});
