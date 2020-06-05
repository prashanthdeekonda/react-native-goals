import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        key: '_' + Math.random().toString(36).substr(2, 9),
        value: enteredGoal,
      },
    ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button style={styles.btn} onPress={addGoalHandler} title="ADD" />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(goal) => (
          <View style={styles.listItem}>
            <Text>{goal.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
  },
  btn: {
    padding: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2,
    color: 'green',
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
});
