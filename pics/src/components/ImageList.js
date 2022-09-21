import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //map (({id, urls, description}) => ) instead for map((image) => )

    let pictures = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className='image-list'>{pictures}</div>
};

export default ImageList;