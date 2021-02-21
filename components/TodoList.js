import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={sytles.listContainer}>
      <Text>TodoList</Text>
    </ScrollView>
  );
};

const sytles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
