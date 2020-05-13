import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';

const Form = ({ navigation, type, id, blogTitle, blogContent, action }) => {
  console.log(navigation);
  // const { state, editBlogPost } = useContext(Context);
  // const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogTitle);
  const [content, setContent] = useState(blogContent);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{type} Title</Text>
      <TextInput
        value={title}
        style={styles.inputBox}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{type} Content</Text>
      <TextInput
        value={content}
        style={styles.inputBox}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
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
