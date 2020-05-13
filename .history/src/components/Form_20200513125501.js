import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';

const Form = ({ id, title, content, action }) => {
  // const { state, editBlogPost } = useContext(Context);
  // const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(title);
  const [content, setContent] = useState(content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title - {id}</Text>
      <TextInput
        value={title}
        style={styles.inputBox}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput
        value={content}
        style={styles.inputBox}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Edit Blog Post"
        onPress={() => {
          console.log(action);
        }}
      />
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

export default Form;
