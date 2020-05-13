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
    <Form
      id={id}
      blogTitle={blogPost.title}
      blogContent={blogPost.content}
      action={editBlogPost}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
