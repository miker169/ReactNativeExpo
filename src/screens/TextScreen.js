import React, { useState } from 'react';

import { View, StyleSheet, Text, TextInput} from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value ={password}
                onChangeText={(newValue) => setPassword(newValue)}

            />
          {password.length < 5 ? <Text style={styles.error}>Password must be longer than 5 characters</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
  input: {
    // paddingTop: 15,
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  error: {
    color: 'red'
  }
});

export default TextScreen;