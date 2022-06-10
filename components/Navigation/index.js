import moviesStore from '../../stores/moviesStore';
import movieDetail from '../movieDetail';
import MoviesList from '../moviesList';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={MoviesList} />
      <Screen
        name="MovieDetail"
        component={movieDetail}
        options={({ route }) => {
          const { id } = route.params;
          return {
            title: moviesStore.getMovieById(id).title,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
