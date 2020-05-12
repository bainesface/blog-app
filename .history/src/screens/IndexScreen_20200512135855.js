import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContext';
import { Entypo } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.blogPostContainer}>
              <Text>{item.title}</Text>
              <Entypo name="trash" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogPostContainer: {
    flexDirection: 'row',
  },
});

export default IndexScreen;
