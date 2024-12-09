//import liraries
import React, {useEffect} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../../store/actions/moviesActions';
import CustomImage from '../../components/ui/customImage';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Colors from '../../theme';
import {resetDetailData} from '../../store/slice/moviesSlice';

// create a component
const MoviesDetail: React.FC<Props> = ({route}) => {
  const {movieDetailData, pending} = useSelector(state => state.movies);

  const {id} = route.params;
  console.log(id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(id));
    return () => {
      dispatch(resetDetailData());
    };
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={Colors.WHİTE} />
      ) : (
        <ScrollView>
          <CustomImage
            path={movieDetailData.backdrop_path}
            style={{
              width: 400,
              height: 200,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              color: Colors.WHİTE,
              fontWeight: '700',
              marginVertical: 10,
            }}>
            {movieDetailData.title}
          </Text>
          <Text style={{fontSize: 16, color: Colors.WHİTE}}>
            {movieDetailData.overview}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.WHİTE,
              fontWeight: '700',
              marginTop: 10,
            }}>
            {movieDetailData.tagline}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};
export default MoviesDetail;
