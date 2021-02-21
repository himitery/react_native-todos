import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={sytles.listContainer}>
      <TodoListItem />
    </ScrollView>
  );
};

const sytles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
