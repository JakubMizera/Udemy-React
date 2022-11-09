import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = (props) => {
    useEffect(() => {
        props.fetchPost();
    });


    return (
        <div>Post list</div>
    );
};


export default connect(null, { fetchPost: fetchPost })(PostList);