import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const CHANGE_RED = 'CHANGE_RED';
const CHANGE_BLUE = 'CHANGE_BLUE';
const CHANGE_GREEN = 'CHANGE_GREEN';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case CHANGE_RED:
      return state.red + payload > 255 || state.red + payload < 0 ? state : {...state, red: state.red + payload};
    case CHANGE_GREEN:
      return state.green + payload > 255 || state.green + payload < 0 ? state : {
        ...state,
        green: state.green + payload
      };
    case CHANGE_BLUE:
      return state.blue + payload > 255 || state.blue + payload < 0 ? state : {...state, blue: state.blue + payload};
    default:
      return state;
  }
};

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});

  return (
      <View>
        <Text>Square Screen</Text>
        <ColorCounter color="red"
                      onIncrease={() => dispatch({type: CHANGE_RED, payload: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({type: CHANGE_RED, payload: -1 * COLOR_INCREMENT})}/>
        <ColorCounter color="blue"
                      onIncrease={() => dispatch({type: CHANGE_BLUE, payload: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({type: CHANGE_BLUE, payload: -1 * COLOR_INCREMENT})}/>
        <ColorCounter color="green"
                      onIncrease={() => dispatch({type: CHANGE_GREEN, payload: COLOR_INCREMENT})}
                      onDecrease={() => dispatch({type: CHANGE_GREEN, payload: -1 * COLOR_INCREMENT})}/>
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}/>
      </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;