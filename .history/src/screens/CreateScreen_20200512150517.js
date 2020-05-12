import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput placeholder="title here" />
      <Text>Enter Content</Text>
      <TextInput placeholder="content here" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
