import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput placeholder="title here" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
