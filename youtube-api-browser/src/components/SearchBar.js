import React from 'react';

class SearchBar extends React.Component {
    state = { searchInput: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.searchWord(this.state.searchInput);
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>YouTube search</label>
                        <input
                            type='text'
                            value={this.state.searchInput}
                            onChange={e => this.setState({ searchInput: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;