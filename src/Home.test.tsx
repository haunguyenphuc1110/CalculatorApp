import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './index';

Enzyme.configure({adapter: new Adapter()});

describe('<Test Snapshot />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Test Home Component />', () => {
  let wrapper: any;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init: any) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Press CLEAR', () => {
    it('calls setCalculator', () => {
      const expectedResult = {
        displayValue: '0',
        operator: null,
        canAddDot: true,
      };
      wrapper.find('Button').first().props().onPress('1');
      expect(setState).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('Press 1', () => {
    it('alls setCalculator', () => {
      const expectedResult = {
        displayValue: '1',
        operator: null,
        canAddDot: true,
      };
      wrapper.find('Button').at(2).props().onPress('+');
      expect(setState).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('Press /', () => {
    it('alls setCalculator', () => {
      const expectedResult = {
        displayValue: '/',
        operator: '/',
        canAddDot: true,
      };
      wrapper.find('Button').at(5).props().onPress('DEL');
      expect(setState).toHaveBeenCalledWith(expectedResult);
    });
  });
});
