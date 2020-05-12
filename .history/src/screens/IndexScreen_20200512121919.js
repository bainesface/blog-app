import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
