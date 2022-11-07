import React from "react";
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    if (selectedSong == null) {
        return <h2>Please select song to see details</h2>
    };

    return (
        <>
            <h2>Song title: {selectedSong.title}</h2>
            <h2>Song duration: {selectedSong.duration}</h2>
        </>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);