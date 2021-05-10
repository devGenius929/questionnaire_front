import React from 'react';
import renderer from 'react-test-renderer';
import MaskedInput from './masked-input';

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MaskedInput
          id="dadosbasicos-titular-titulo"
          mask="999.999.999-99"
          name="voterRegistration"
          className="tituloEleitor"
          value="something"
          placeholder="CPF"
          onChange={(e) => console.log('Changed!')}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
