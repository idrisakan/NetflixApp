//import liraries
import React from 'react';
import { Image} from 'react-native';
import {TOKEN} from '../../utils/constans';
import {IMAGE_BASE_URL} from '../../service/urls';
import {customImageProps} from '../../model/ui/customimageProps';

// create a component
const CustomImage: React.FC<customImageProps> = props => {
  const {path, style} = props;
  return (
    <Image
      source={{
        uri: `${IMAGE_BASE_URL}${path}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }}
      style={style}
    />
  );
};

export default CustomImage;
