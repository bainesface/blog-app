import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
