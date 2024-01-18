import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

interface ForecastWithImageProps {
  icon: string;
  condition: string;
  temp_c: number;
}

const ForecastWithImage = (props: ForecastWithImageProps) => {
  const {icon, condition, temp_c} = props;
  return (
    <View style={styles.rowView}>
      <Image
        style={styles.imageView}
        source={{
          uri: `https:${icon}`,
        }}
      />
      <View style={styles.textView}>
        <Text>{condition}</Text>
        <Text>{temp_c}°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {flexDirection: 'row', flex: 1},
  imageView: {width: 64, height: 64},
  textView: {justifyContent: 'center'},
});

export {ForecastWithImage};
