import React from 'react';
import {shallow} from "enzyme";
import Footer from './index';

describe('Footer component', () => {
    test('renders without crashing', () => {
        const component = shallow(<Footer />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    test('renders children when passed in', () => {
        const component = shallow((
            <Footer>
                <div className="unique" />
            </Footer>
        ));

        expect(component.contains(<div className="unique" />)).toBe(true);
        component.unmount();
    });

    test('footer copyright year is current year', () => {
        const currentYear = new Date().getFullYear();
        const component = shallow(<Footer />);
        const footerText = component.find('footer').text();

        expect(footerText).toContain(currentYear);
        component.unmount();
    });
});