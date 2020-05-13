import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  console.log(title);
  const [content, setContent] = useState(blogPost.content);
  console.log(content);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title - {navigation.getParam('id')}</Text>
      <TextInput
        value={title}
        style={styles.inputBox}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput value={content} style={styles.inputBox} />
      <Button
        title="Edit Blog Post"
        onPress={() => {
          editBlogPost(id, title, content, () => {
            navigation.navigate('Index');
          });
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

export default EditScreen;
