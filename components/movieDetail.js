import { observer } from 'mobx-react';
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import moviesStore from '../stores/moviesStore';

const MovieDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const movie = moviesStore.getMovieById(id);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={movie.image} style={{ width: 350, height: 150 }} />
        </View>

        <Text style={styles.text}>{movie.title}</Text>
        <Text style={styles.text}>{movie.description}</Text>
      </ScrollView>
    </View>
  );
};

export default observer(MovieDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 15,
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
