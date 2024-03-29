import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import moviesStore from './stores/moviesStore';

export default function App() {
  const moviesList = moviesStore
    .getMovies()
    .map((movie) => (
      <Image key={movie.id} source={movie.image} style={styles.image} />
    ));

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('./assets/mainimage.jpg')}
            style={{ width: 350, height: 150 }}
          />
        </View>

        <Text style={styles.text}>Movies</Text>

        <View style={styles.grid}>{moviesList}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
    flexWrap: 'wrap',
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
