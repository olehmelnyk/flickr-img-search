import React from 'react';
import {shallow} from "enzyme";
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
    component.unmount();
  });
});