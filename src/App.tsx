import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/Root';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
