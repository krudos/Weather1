import {PropsWithChildren} from 'react';
import {ScrollView} from 'react-native';

type BaseScreenProps = PropsWithChildren<{}>;

const BaseScreen = ({children}: BaseScreenProps) => {
  return (
    <ScrollView style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
      {children}
    </ScrollView>
  );
};

export {BaseScreen};
