import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContext';
import { Entypo } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={() => navigation.navigate('Create')} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.blogPostContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Entypo style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Entypo name="plus" style={styles.plus} />
      </TouchableOpacity>
    ),
  };
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
  plus: {
    fontSize: 30,
    marginRight: 10,
  },
});

export default IndexScreen;
