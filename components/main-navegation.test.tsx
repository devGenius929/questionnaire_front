import React from 'react';
import renderer from 'react-test-renderer';
import Navegation from './main-navegation';

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navegation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
