import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
