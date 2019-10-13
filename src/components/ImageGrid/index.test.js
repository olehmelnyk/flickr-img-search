import React from 'react';
import {shallow, mount, render} from "enzyme";
import ImageGrid from './index';
import ImageGridItem from "../ImageGridItem";

const imageList = [
    {id: 1, title: 'title', farm: '66', secret: 'secret'},
    {id: 2, title: 'title', farm: '66', secret: 'secret'},
    {id: 3, title: 'title', farm: '66', secret: 'secret'},
];

describe('ImageGridItem component', () => {
    test('renders without crashing', () => {
        const component = shallow(<ImageGrid imageList={imageList} />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    test('renders ImageGridItem with proper params', () => {
        const component = mount(<ImageGrid imageList={imageList} />);

        const renderedImg = component.find(ImageGridItem);
        expect(renderedImg).toBeTruthy();

        expect(renderedImg.at(2).props().id).toBe(imageList[2].id);

        component.unmount();
    });
});