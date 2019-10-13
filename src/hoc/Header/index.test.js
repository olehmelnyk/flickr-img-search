import React from 'react';
import {shallow} from "enzyme";
import Header from './index';

describe('Header component', () => {
    test('renders without crashing', () => {
        const component = shallow(<Header />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    test('renders children when passed in', () => {
        const component = shallow((
            <Header>
                <div className="unique" />
            </Header>
        ));

        expect(component.contains(<div className="unique" />)).toBe(true);
        component.unmount();
    });
});