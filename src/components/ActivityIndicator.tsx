import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator as ActivityIndicatorPaper} from 'react-native-paper';

interface ActivityIndicatorProps {
  isLoading: boolean;
}
const ActivityIndicator = (props: ActivityIndicatorProps) => {
  if (!props.isLoading) {
    return null;
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexGrow: 1,
      }}>
      <ActivityIndicatorPaper />
    </View>
  );
};
export {ActivityIndicator};
