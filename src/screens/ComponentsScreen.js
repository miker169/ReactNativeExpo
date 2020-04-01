import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {

  const greeting = "Mike Rayner";
  return (
      <View>
        <Text style={styles.textStyle}>Getting Start with React Native!</Text>
        <Text style={styles.greetingStyle}>My Name is {greeting}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  greetingStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;