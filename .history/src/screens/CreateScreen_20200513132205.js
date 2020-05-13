import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';
import Form from '../components/Form';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <Form type={'Enter'} blogTitle={''} blogContent={''} action={addBlogPost} />
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
