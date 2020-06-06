import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      },
    ]);
    setModalOpen(false);
  };

  const deleteGoal = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((x) => x.id !== id);
    });
  };
  
  const cancelModal = () => {
    setModalOpen(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalOpen(true)} />
      <GoalInput cancel={cancelModal} visible={isModalOpen} onAddGoal={addGoalHandler} />
      {/* // default it looks for item.key if you dont specify */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(goal) => (
          <GoalItem
            id={goal.item.id}
            onDelete={deleteGoal}
            goal={goal.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
