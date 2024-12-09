import React from 'react';
import {Pressable} from 'react-native';
import {MovieItemProps} from '../../model/ui/movieItem';
import CustomImage from '../ui/customImage';
import {useNavigation} from '@react-navigation/native';
import {MOVIESDETAİL} from '../../utils/routes';

// create a component
const MovieItem: React.FC<MovieItemProps> = props => {
  const {item, type} = props;
 
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(MOVIESDETAİL, {id: item.id})
      }>
      <CustomImage
        style={{
          width: 150,
          height: 200,
          borderRadius: 10,
          resizeMode: 'contain',
        }}
        path={item.poster_path}
      />
    </Pressable>
  );
};

// define your styles

//make this component available to the app
export default MovieItem;
