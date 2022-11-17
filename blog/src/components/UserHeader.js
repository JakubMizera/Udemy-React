import React from 'react';
import { connect } from 'react-redux';

const UserHeader = (props) => {
    const findUser = () => {
        const { user } = props;

        if (!user) {
            return <h4 className='header'>Loading...</h4>
        };

        return (
            <h4 className='header'>{user.name}</h4>
        );
    }

    return (
        <>
            {findUser()}
        </>
    );
};

//ownProps is a refrence to components props
const mapStateToProps = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);