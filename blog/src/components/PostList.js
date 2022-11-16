import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = (props) => {
    useEffect(() => {
        props.fetchPost();
    }, []);

    console.log(props.posts);
    return (
        <div>Post list</div>
    );
};

const mapStateToProps = (state) => {
    return { posts: state.posts }
};

export default connect(mapStateToProps, { fetchPost: fetchPost })(PostList);