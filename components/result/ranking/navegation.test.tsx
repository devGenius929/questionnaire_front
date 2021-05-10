import React from 'react';
import renderer from 'react-test-renderer';
import Navegation from './navegation';

describe('Navegation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navegation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
