import React from 'react';
import {shallow} from "enzyme";
import Main from './index';

describe('Header component', () => {
    test('renders without crashing', () => {
        const component = shallow(<Main />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    test('renders children when passed in', () => {
        const component = shallow((
            <Main>
                <div className="unique" />
            </Main>
        ));

        expect(component.contains(<div className="unique" />)).toBe(true);
        component.unmount();
    });
});