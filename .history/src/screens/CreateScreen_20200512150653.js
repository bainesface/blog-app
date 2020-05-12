import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput style={styles.inputBox} placeholder="title here" />
      <Text>Enter Content</Text>
      <TextInput style={styles.inputBox} placeholder="content here" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#FFF',
  },
});

export default CreateScreen;
