import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        style={styles.inputBox}
        placeholder="title here"
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        value={content}
        style={styles.inputBox}
        placeholder="content here"
        onChangeText={(text) => setContent(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#FFF',
    fontSize: 18,
    borderRadius: 4,
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default CreateScreen;
