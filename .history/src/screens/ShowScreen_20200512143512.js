import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ item }) => {
  const { id, title } = item;
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
