import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <Entypo name="edit" style={styles.edit} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  edit: {
    fontSize: 30,
    marginRight: 10,
  },
});

export default ShowScreen;
