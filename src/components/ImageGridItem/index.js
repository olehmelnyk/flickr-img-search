import React from 'react';
import './index.css';

const ImageGridItem = ({farm, server, id, secret, title}) => {
    if (!farm || !server || !id || !secret) {
        return null;
    }

    const src = `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_b.jpg`;

    return <img className="gallery-image-item" src={src} alt={title} title={title} key={id} />
};

export default ImageGridItem;