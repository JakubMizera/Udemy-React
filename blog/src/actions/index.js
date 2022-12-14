import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//creating combined action creator to reduce api requests
export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    //_.uniq => take only unique values | 
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}

//using redux thunk 
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POST',
        payload: response.data,
    });
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data,
    })
}

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// //memoized fetch user to reduce api requests (using lodash)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data,
//     })
// });