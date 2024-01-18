import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

interface NetworkErrorProps {
  refetch: () => void;
  isError: boolean;
  isLoading: boolean;
}

const NetworkError = (props: NetworkErrorProps) => {
  if (props.isLoading) {
    return null;
  }

  if (!props.isError) {
    return null;
  }
  return (
    <View style={styles.content}>
      <Text>Network error</Text>
      <Button onPress={() => props.refetch()}> Retry</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export {NetworkError};
