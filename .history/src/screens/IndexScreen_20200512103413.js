import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../contexts/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
