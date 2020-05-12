import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        style={styles.inputBox}
        placeholder="title here"
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        style={styles.inputBox}
        placeholder="content here"
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
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

export default CreateScreen;
