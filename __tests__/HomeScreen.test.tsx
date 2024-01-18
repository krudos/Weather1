import 'react-native';
import React from 'react';
import App from '../src/App';

import {it, describe, expect} from '@jest/globals';
import {render, screen, userEvent} from '@testing-library/react-native';

describe('Home Screen', () => {
  it('no result when app start', async () => {
    const component = <App />;

    render(component);

    const noContent = await screen.findByText('No results');

    expect(noContent).toBeOnTheScreen();
  });

  it('search for Guatemala', async () => {
    const component = <App />;

    render(component);

    const searchbar = screen.getByTestId('search-bar');

    const user = userEvent.setup();
    await user.type(searchbar, 'Guatemala');

    const cityName = await screen.findByText('Guatemala City,');

    expect(cityName).toBeOnTheScreen();
  });
});
