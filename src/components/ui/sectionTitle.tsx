//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme';
import {SectionTitlePropsType} from '../../model/ui/sectionItem';

// create a component
const SectionTitle: React.FC<SectionTitlePropsType> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: '700', color: Colors.WHİTE}}>
        {title}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default SectionTitle;
