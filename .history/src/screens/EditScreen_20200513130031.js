import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';
import Form from '../components/Form';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  // const [title, setTitle] = useState(blogPost.title);
  // const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Edit Title - {navigation.getParam('id')}</Text>
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
          editBlogPost(id, title, content, () => {
            navigation.navigate('Index');
          });
        }}
      /> */}
      <Form
        id={id}
        blogTitle={blogPost.title}
        blogContent={blogPost.content}
        action={editBlogPost}
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
