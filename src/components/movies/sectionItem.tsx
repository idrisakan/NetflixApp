import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {SectionItemProps} from '../../model/ui/sectionItem';
import SectionTitle from '../ui/sectionTitle';
import MovieItem from './moviesItem';
import {sections} from '../../utils/constans';
import {useDispatch, useSelector} from 'react-redux';
import {getPopulerTv, getTopRatedTv} from '../../store/actions/tvActions';
import {
  getPopulerMovies,
  getTopRatedMovies,
} from '../../store/actions/moviesActions';

// create a component
const SectionItem: React.FC<SectionItemProps> = props => {
  const {sectionItem} = props;
  const {topRateMovies, populerMovies} = useSelector(state => state.movies);
  const {topRateTv, populerTv} = useSelector(state => state.tv);
  const dispatch = useDispatch();

  /* const getReturnData =
    item?.section == sections.TOPRATEDTV ? topRateTv : topRateMovies; */

  const getReturnData =
    sectionItem?.section == sections.TOPRATEDTV
      ? topRateTv
      : sectionItem?.section == sections.TOPRATEDMOVIES
      ? topRateMovies
      : sectionItem?.section == sections.POPULERMOVIES
      ? populerMovies
      : sectionItem?.section == sections.POPULERTV
      ? populerTv
      : [];

  useEffect(() => {
    if (sectionItem.section == sections.TOPRATEDTV) {
      dispatch(getTopRatedTv());
    } else if (sectionItem?.section == sections.TOPRATEDMOVIES) {
      dispatch(getTopRatedMovies());
    } else if (sectionItem?.section == sections.POPULERMOVIES) {
      dispatch(getPopulerMovies());
    } else if (sectionItem?.section == sections.POPULERTV) {
      dispatch(getPopulerTv());
    }
  }, []);
  return (
    <View>
      <SectionTitle title={sectionItem.title} />
      <FlatList
        horizontal
        data={getReturnData}
        renderItem={({item}) => (
          <MovieItem item={item} type={sectionItem.type} />
        )}
      />
    </View>
  );
};

export default SectionItem;
