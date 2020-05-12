import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ navigation }) => {
  const item = navigation.getParam('item');
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
