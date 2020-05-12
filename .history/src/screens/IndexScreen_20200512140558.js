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
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <Entypo style={styles.icon} name="trash" />
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
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 20,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
