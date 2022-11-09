import React from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
    //console.log(props);
    const renderList = () => {
        return props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            // Passing song we are currently iterating over
                            onClick={() => props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="ui divided list">{renderList()}</div>
    )
};

// mapStateToProps is convention name 
const mapStateToProps = (state) => {
    //console.log(state);
    return { songs: state.songs };
};

// Passing action creator (selectSong) to connect component,
// we wrap it in dispatch function which updates the redux state
// ES2015;  {selectedSong: selectedSong} is shorten to {selectedSong}
export default connect(mapStateToProps, { selectSong })(SongList);