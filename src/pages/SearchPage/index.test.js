import React from 'react';
import {shallow} from "enzyme";
import SearchPage from './index';

describe('SearchPage component', () => {
    test('renders without crashing', () => {
        const component = shallow(<SearchPage />);
        expect(component).toBeTruthy();
        component.unmount();
    });
});