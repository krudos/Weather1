import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/Root';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
