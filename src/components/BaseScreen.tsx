import React from 'react';
import {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

type BaseScreenProps = PropsWithChildren<{edges?: Edges | undefined}>;

const BaseScreen = ({children, edges}: BaseScreenProps) => {
  return (
    <SafeAreaView style={styles.parent} edges={edges}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {flex: 1},
  scrollView: {flex: 1, paddingLeft: 10, paddingRight: 10},
});

export {BaseScreen};
