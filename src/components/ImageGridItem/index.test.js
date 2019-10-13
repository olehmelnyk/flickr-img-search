import React from 'react';
import {shallow, mount, render} from "enzyme";
import ImageGridItem from './index';

const image = {id: 1, title: 'title', farm: '66', secret: 'secret'};

describe('ImageGridItem component', () => {
    test('renders without crashing', () => {
        const component = shallow(<ImageGridItem image={image} />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    // check that item renders with correct data
    // test('renders ImageGridItem with correct info', () => {
    //     const component = mount(<ImageGridItem image={image} />);
    //     const imageX = component.prop('src');
    //     console.log(component, imageX);
    //     // expect(imageX).toBe(true);
    //     component.unmount();
    // })
});