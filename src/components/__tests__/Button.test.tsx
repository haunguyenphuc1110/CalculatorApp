import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button.component';

it('renders correctly', () => {
  const props = {
    value: '9',
    onPress: jest.fn(),
  };
  const tree = renderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
