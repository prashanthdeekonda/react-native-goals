import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={InputStyles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={InputStyles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={InputStyles.buttonContainer}>
          <View style={InputStyles.btn}>
            <Button
              style={InputStyles.btn}
              onPress={addGoalHandler}
              title="ADD"
            />
          </View>
          <View style={InputStyles.btn}>
            <Button color="red" onPress={props.cancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const InputStyles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    marginBottom: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 2,
    width: '40%',
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default GoalInput;
