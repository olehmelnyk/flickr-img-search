import React from 'react';
import ImageGridItem from "../ImageGridItem";
import './index.css';

const ImageGrid = ({imageList}) => (
    <div className="gallery-grid">
        {imageList.map(image => <ImageGridItem {...image} key={image.id} />)}
    </div>
);

export default ImageGrid;