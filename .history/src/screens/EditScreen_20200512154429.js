import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>Edit Title</Text>
      <Text>{blogPost.title}</Text>
      <TextInput />
      <Text>Edit Content</Text>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
