import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={listStyles.listItem}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
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
