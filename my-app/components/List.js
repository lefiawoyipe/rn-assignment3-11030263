import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function List() {
  const data = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    { id: '4', title: 'Coding' },
    { id: '5', title: 'Meeting' },
    { id: '6', title: 'Documentaion' },
    { id: '7', title: 'Writing' },
    { id: '8', title: 'Planning' },
    { id: '9', title: 'Practice' },
    { id: '10', title: 'Study' },
    { id: '11', title: 'Draft' },
    { id: '12', title: 'Implementation' },
    { id: '13', title: 'Debugging' },
    { id: '14', title: 'Compiling' },
    { id: '15', title: 'Execute' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingBottom: 10,
  },
});
