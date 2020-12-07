import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container, WrapperDescription, Name, Year} from './styles';

import {MoviesProps, useMoviesSeries} from '../../hooks/MoviesSeries';

import {useNavigation} from '@react-navigation/native';

import theme from '../../utils/theme';
import Ratings from '../StartRating';

const {width} = Dimensions.get('window');
const numberGrid = 2;
const itemWidth = (width - 32) / numberGrid;

interface GridMoviesSeriesProps {
  data: MoviesProps[];
}

type SurveyState = {
  id?: number;
  punctual?: string;
  otherProjectIndication?: number;
  otherProjectIndicationJustification?: string;
};

const GridMoviesSeries: React.FC<GridMoviesSeriesProps> = ({data}) => {
  const [state, setState] = useState({});

  const navigation = useNavigation();
  const {loadMoreMovies} = useMoviesSeries();

  function handleRatingChangeFor(prop: string) {
    return function handleRatingChange(stars: number): void {
      setState({
        ...state,
        [prop]: stars,
        ...(stars > 2 ? {[`${prop}Justification`]: ''} : {}),
      });
    };
  }

  return (
    <Container testID="grid">
      <FlatList
        data={data}
        numColumns={numberGrid}
        keyExtractor={(movie) => movie.imdbID}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={0.4}
        renderItem={({item: movie}) => (
          <TouchableWithoutFeedback
            testID="movie"
            onPress={() =>
              navigation.navigate('Description', {
                id: movie.imdbID,
              })
            }>
            <View style={styles.wrapper}>
              <Image source={{uri: movie.Poster}} style={styles.img} />
              <WrapperDescription>
                <Name>{movie.Title}</Name>
                <Ratings
                  stars={state.selectStars}
                  onChange={handleRatingChangeFor('selectStars')}
                  disabled={!!state.id}
                />
                <Year>{movie.Year}</Year>
              </WrapperDescription>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: itemWidth,
    resizeMode: 'stretch',
    height: 180,
    borderRadius: 4,
  },
  wrapper: {
    width: itemWidth,
    margin: 2,
    backgroundColor: theme.font,
    paddingBottom: 4,
    borderRadius: 4,
  },
});

export default GridMoviesSeries;
