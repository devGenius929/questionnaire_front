import React from 'react';
import renderer from 'react-test-renderer';
import DateInput from './date-input';

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DateInput
          id="dateTestId"
          name="dateTest"
          value="01021980"
          className="date"
          onChange={() => console.log('Date changed')}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
