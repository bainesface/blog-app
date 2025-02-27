import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';
import Form from '../components/Form';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <Form
      type={'Edit'}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
