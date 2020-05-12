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
      <TextInput value={blogPost.title} />
      <Text>Edit Content</Text>
      <TextInput value={blogPost.content} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
