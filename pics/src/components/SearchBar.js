import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //Use arrow function to bind keyword 'this'
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;