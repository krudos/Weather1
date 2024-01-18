import React from 'react';
import {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

type BaseScreenProps = PropsWithChildren<{edges?: Edges | undefined}>;

const BaseScreen = ({children, edges}: BaseScreenProps) => {
  return (
    <SafeAreaView style={styles.scrollView} edges={edges}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {flex: 1, paddingLeft: 10, paddingRight: 10},
});

export {BaseScreen};
