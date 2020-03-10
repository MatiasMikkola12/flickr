import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('snapshot of the contents of the card', () => {
  const theapp = renderer.create(<App />).toJSON();
  expect(theapp).toMatchSnapshot();
});
