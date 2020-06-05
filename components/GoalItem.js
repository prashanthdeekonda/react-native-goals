import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={listStyles.listItem}>
      <Text>{props.goal}</Text>
    </View>
  );
};

const listStyles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
});

export default GoalItem;
