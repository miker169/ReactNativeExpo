import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const reducer = (state, {type}) => {
  switch (type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
      <View>
        <Button title="increase" onPress={() => dispatch({type: INCREASE})}/>
        <Button title="decrease" onPress={() => dispatch({type: DECREASE})}/>
        <Text>Current Count: {state} </Text>
      </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;