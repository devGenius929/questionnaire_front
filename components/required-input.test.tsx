import React from 'react';
import renderer from 'react-test-renderer';
import RequiredInput from './required-input';

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <RequiredInput
          id="Name"
          name="Name"
          className="Name"
          label="Nome*"
          value="Jo Blake"
          onChange={(e) => console.log('Changed!')}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
