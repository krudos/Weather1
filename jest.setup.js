import '@testing-library/jest-native/extend-expect';
// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import {MockDataSearchLocation, MockDataGetForecast} from './Mocks';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.useFakeTimers();
const january182024 = new Date('2024-01-18 12:00');
jest.setSystemTime(january182024);

jest.mock('react-query', () => {
  const actual = jest.requireActual('react-query');
  return {
    ...actual,
    useQuery: keys => {
      if (keys[0] === 'searchLocation') {
        if (keys[1].toLowerCase() === 'guatemala') {
          return {
            data: MockDataSearchLocation,
            isLoading: false,
          };
        }
      }

      if (keys[0] === 'getForecast') {
        if (keys[1].toLowerCase() === 'guatemala-city-guatemala-guatemala') {
          return {
            data: MockDataGetForecast,
            isLoading: false,
          };
        }
      }

      return {
        data: [],
        isLoading: false,
      };
    },
  };
});
