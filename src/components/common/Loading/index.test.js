import React from 'react';
import {shallow} from "enzyme";
import Loading from './index';


describe('Loading component', () => {
    test('renders without crashing', () => {
        const component = shallow(<Loading />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    test('correct loading text', () => {
        const loadingText = 'Test loading text...';
        const component = shallow((
            <Loading loading={true} loadingText={loadingText} />
        ));

        expect(component.text()).toBe(loadingText);
        component.unmount();
    });
});