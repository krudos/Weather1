import 'react-native';
import React from 'react';
import App from '../src/App';

import {it, describe, expect} from '@jest/globals';
import {render, screen, userEvent} from '@testing-library/react-native';

describe('Forecast Screen', () => {
  it('search for Guatemala and see details', async () => {
    const component = <App />;

    render(component);

    const searchbar = screen.getByTestId('search-bar');

    const user = userEvent.setup();
    await user.type(searchbar, 'Guatemala');

    const cityName = await screen.findByText('Guatemala City,');

    await user.press(cityName);

    const next5hoursHeader = await screen.findByText('Next 5 hours forecast');

    expect(next5hoursHeader).toBeOnTheScreen();

    const condition = await screen.findByText('Partly cloudy');

    expect(condition).toBeOnTheScreen();

    const temp = await screen.findByText('17°');

    expect(temp).toBeOnTheScreen();

    // screen.debug({message: 'optional message'});
  });
});
