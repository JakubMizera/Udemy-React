import jsonPlaceholder from '../apis/jsonPlaceholder';

//using redux thunk 
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POST',
        payload: response,
    });
};
