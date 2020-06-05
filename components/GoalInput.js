import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={InputStyles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={InputStyles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        style={InputStyles.btn}
        onPress={props.onAddGoal.bind(this, enteredGoal)}
        title="ADD"
      />
    </View>
  );
};

const InputStyles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2,
    color: 'green',
  },
});

export default GoalInput;
