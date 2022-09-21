import React from 'react';

const ImageList = (props) => {
    //map (({id, urls, description}) => ) instead for map((image) => )

    let pictures = props.images.map(({ id, urls, description }) => {
        return <img key={id} src={urls.regular} alt={description} />
    });

    return <div>{pictures}</div>
};

export default ImageList;