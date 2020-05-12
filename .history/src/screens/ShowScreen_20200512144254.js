import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
