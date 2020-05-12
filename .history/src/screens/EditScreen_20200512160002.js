import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
  // const id = navigation.getParam('id');
  // console.log(id, 'id');
  // const { state } = useContext(Context);
  // const blogPost = state.find((blogPost) => blogPost.id === id);
  // console.log(blogPost);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput style={styles.inputBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#FFF',
    fontSize: 18,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  container: {
    margin: 10,
  },
});

export default EditScreen;
